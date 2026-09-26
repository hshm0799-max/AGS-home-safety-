import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Rotate3d, 
  Sun, 
  Moon, 
  Sunset, 
  ShieldCheck, 
  Maximize2, 
  Sliders, 
  Scissors, 
  Eye, 
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

export type Product3DMode = 'grill' | 'dryer' | 'net' | 'spikes';
export type LightingMode = 'day' | 'sunset' | 'night';

interface Interactive3DViewerProps {
  initialMode?: Product3DMode;
  initialLighting?: LightingMode;
  height?: string;
  showControls?: boolean;
  onModeChange?: (mode: Product3DMode) => void;
}

export const Interactive3DViewer: React.FC<Interactive3DViewerProps> = ({
  initialMode = 'grill',
  initialLighting = 'sunset',
  height = '520px',
  showControls = true,
  onModeChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Product3DMode>(initialMode);
  const [lighting, setLighting] = useState<LightingMode>(initialLighting);
  const [wireSpacing, setWireSpacing] = useState<'2inch' | '3inch'>('2inch');
  const [hasCrossClips, setHasCrossClips] = useState<boolean>(true);
  const [dryerDropLevel, setDryerDropLevel] = useState<number>(35); // 0% to 100%
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isEmergencyCutActive, setIsEmergencyCutActive] = useState<boolean>(false);
  const [selectedWireInfo, setSelectedWireInfo] = useState<string | null>(null);

  // Sync mode changes
  const handleModeSwitch = (newMode: Product3DMode) => {
    setMode(newMode);
    if (onModeChange) onModeChange(newMode);
  };

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const rootGroupRef = useRef<THREE.Group | null>(null);
  const pipesGroupRef = useRef<THREE.Group | null>(null);
  const lightsRef = useRef<{
    ambient: THREE.AmbientLight;
    directional: THREE.DirectionalLight;
    point1: THREE.PointLight;
    point2: THREE.PointLight;
  } | null>(null);

  // Mouse interaction state
  const isDraggingRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0.1, y: -0.2 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const width = container.clientWidth || 600;
    const heightPx = container.clientHeight || 500;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 100);
    camera.position.set(0, 1.2, 5.2);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.replaceChildren(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 1.2);
    directional.position.set(5, 8, 4);
    directional.castShadow = true;
    directional.shadow.mapSize.width = 1024;
    directional.shadow.mapSize.height = 1024;
    scene.add(directional);

    const point1 = new THREE.PointLight(0xfbbf24, 1.5, 8); // Warm ceiling spotlight
    point1.position.set(-1.5, 2.4, 0.5);
    scene.add(point1);

    const point2 = new THREE.PointLight(0x38bdf8, 1.0, 8); // Cool city bounce
    point2.position.set(2, -0.5, 2);
    scene.add(point2);

    lightsRef.current = { ambient, directional, point1, point2 };

    // 3. Root Interactive Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);
    rootGroupRef.current = rootGroup;

    // 4. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isAutoRotate && !isDraggingRef.current) {
        rotationRef.current.y += 0.003;
      }

      // Smooth damping
      rootGroup.rotation.y = rotationRef.current.y;
      rootGroup.rotation.x = Math.max(-0.4, Math.min(0.4, rotationRef.current.x));

      renderer.render(scene, camera);
    };
    animate();

    // 5. Drag & Touch Orbit Controls
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMouseRef.current.x;
      const deltaY = e.clientY - prevMouseRef.current.y;

      rotationRef.current.y += deltaX * 0.008;
      rotationRef.current.x += deltaY * 0.008;

      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseRef.current.x;
      const deltaY = e.touches[0].clientY - prevMouseRef.current.y;

      rotationRef.current.y += deltaX * 0.008;
      rotationRef.current.x += deltaY * 0.008;

      prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Update Environment Lighting Colors based on day/sunset/night
  useEffect(() => {
    if (!lightsRef.current || !sceneRef.current) return;
    const { ambient, directional, point1, point2 } = lightsRef.current;

    if (lighting === 'day') {
      sceneRef.current.background = null;
      ambient.color.setHex(0xffffff);
      ambient.intensity = 0.85;
      directional.color.setHex(0xfffbeb);
      directional.intensity = 1.4;
      point1.color.setHex(0xffffff);
      point1.intensity = 0.4;
      point2.color.setHex(0x93c5fd);
      point2.intensity = 0.6;
    } else if (lighting === 'sunset') {
      ambient.color.setHex(0xfed7aa);
      ambient.intensity = 0.7;
      directional.color.setHex(0xf97316);
      directional.intensity = 1.3;
      point1.color.setHex(0xfbbf24);
      point1.intensity = 1.2;
      point2.color.setHex(0xc084fc);
      point2.intensity = 0.8;
    } else {
      // Night mode - like the user's night balcony photos with warm spotlights & city glow
      ambient.color.setHex(0x1e293b);
      ambient.intensity = 0.4;
      directional.color.setHex(0x38bdf8);
      directional.intensity = 0.4;
      point1.color.setHex(0xf59e0b); // Warm golden recessed spotlight
      point1.intensity = 2.2;
      point2.color.setHex(0x60a5fa); // Cyan bokeh city light
      point2.intensity = 1.4;
    }
  }, [lighting]);

  // Rebuild 3D Model Geometry depending on selected Mode
  useEffect(() => {
    const root = rootGroupRef.current;
    if (!root) return;

    // Clear existing children
    while (root.children.length > 0) {
      const obj = root.children[0];
      root.remove(obj);
    }

    if (mode === 'grill') {
      buildInvisibleGrillScene(root);
    } else if (mode === 'dryer') {
      buildCeilingDryerScene(root);
    } else if (mode === 'net') {
      buildSafetyNetScene(root);
    } else if (mode === 'spikes') {
      buildBirdSpikesScene(root);
    }
  }, [mode, wireSpacing, hasCrossClips, isEmergencyCutActive]);

  // Update Ceiling Dryer Pipe Height dynamically
  useEffect(() => {
    if (mode !== 'dryer' || !pipesGroupRef.current) return;
    const dropDistance = (dryerDropLevel / 100) * 1.4; // Max 1.4 units down

    pipesGroupRef.current.children.forEach((pipeObj, idx) => {
      // Stagger pipes slightly for realism
      const stagger = (idx % 2 === 0 ? 0.05 : -0.05);
      pipeObj.position.y = 1.8 - dropDistance + stagger;
    });
  }, [dryerDropLevel, mode]);

  // --- SCENE BUILDERS ---

  // 1. SS 316 Marine Invisible Grill Balcony Scene
  const buildInvisibleGrillScene = (root: THREE.Group) => {
    // Balcony Floor
    const floorGeo = new THREE.BoxGeometry(4.2, 0.2, 2.4);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.3,
      metalness: 0.1,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.set(0, -1.0, 0);
    floor.receiveShadow = true;
    root.add(floor);

    // Balcony Ceiling
    const ceilingGeo = new THREE.BoxGeometry(4.2, 0.15, 2.4);
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.8,
    });
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.position.set(0, 2.2, 0);
    root.add(ceiling);

    // Warm Recessed Ceiling Lights (Matching user's photos)
    for (let lx = -1.4; lx <= 1.4; lx += 0.93) {
      const downlightGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.02, 16);
      const downlightMat = new THREE.MeshBasicMaterial({ color: 0xffedd5 });
      const dl = new THREE.Mesh(downlightGeo, downlightMat);
      dl.position.set(lx, 2.12, 0.2);
      root.add(dl);
    }

    // Modern Glass / Steel Balcony Railing (Lower Half)
    const glassRailGeo = new THREE.BoxGeometry(4.0, 1.0, 0.04);
    const glassRailMat = new THREE.MeshPhysicalMaterial({
      color: 0x93c5fd,
      transmission: 0.85,
      opacity: 0.9,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      reflectivity: 0.9,
    });
    const glassRail = new THREE.Mesh(glassRailGeo, glassRailMat);
    glassRail.position.set(0, -0.4, 1.0);
    root.add(glassRail);

    // Top Handrail (SS 304 Chrome)
    const handrailGeo = new THREE.CylinderGeometry(0.04, 0.04, 4.08, 16);
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.95,
      roughness: 0.12,
    });
    const handrail = new THREE.Mesh(handrailGeo, steelMat);
    handrail.rotation.z = Math.PI / 2;
    handrail.position.set(0, 0.12, 1.0);
    root.add(handrail);

    // Top & Bottom Heavy Anodized Aluminum Track Extrusions
    const trackGeo = new THREE.BoxGeometry(4.08, 0.08, 0.08);
    const trackMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.3 });
    
    const topTrack = new THREE.Mesh(trackGeo, trackMat);
    topTrack.position.set(0, 2.12, 1.0);
    root.add(topTrack);

    const bottomTrack = new THREE.Mesh(trackGeo, trackMat);
    bottomTrack.position.set(0, -0.88, 1.0);
    root.add(bottomTrack);

    // SS 316 Marine Invisible Grill Vertical Cables
    const count = wireSpacing === '2inch' ? 24 : 14;
    const startX = -1.9;
    const stepX = 3.8 / (count - 1);

    const cableGeo = new THREE.CylinderGeometry(0.008, 0.008, 3.0, 8);
    const cableMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.98,
      roughness: 0.08,
    });

    for (let i = 0; i < count; i++) {
      // If emergency cut active, split 2 wires in middle
      if (isEmergencyCutActive && (i === Math.floor(count / 2) || i === Math.floor(count / 2) - 1)) {
        // Cut wire top half
        const cutTopGeo = new THREE.CylinderGeometry(0.008, 0.008, 1.1, 8);
        const cutTop = new THREE.Mesh(cutTopGeo, cableMat);
        cutTop.position.set(startX + i * stepX, 1.5, 1.0);
        cutTop.rotation.z = (i % 2 === 0 ? 0.08 : -0.08);
        root.add(cutTop);

        // Cut wire bottom half
        const cutBotGeo = new THREE.CylinderGeometry(0.008, 0.008, 1.1, 8);
        const cutBot = new THREE.Mesh(cutBotGeo, cableMat);
        cutBot.position.set(startX + i * stepX, -0.3, 1.0);
        cutBot.rotation.z = (i % 2 === 0 ? -0.1 : 0.1);
        root.add(cutBot);
        continue;
      }

      const cable = new THREE.Mesh(cableGeo, cableMat);
      cable.position.set(startX + i * stepX, 0.62, 1.0);
      root.add(cable);
    }

    // Horizontal Stiffener Wires & T-Cross Clamps (Matching user's macro close-up WA0009 photo)
    if (hasCrossClips) {
      const hWireGeo = new THREE.CylinderGeometry(0.009, 0.009, 3.9, 8);
      const hWire1 = new THREE.Mesh(hWireGeo, cableMat);
      hWire1.rotation.z = Math.PI / 2;
      hWire1.position.set(0, 1.1, 1.0);
      root.add(hWire1);

      // T-Cross Clamps at every intersection
      const crossClampGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.04, 8);
      const crossClampMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.95, roughness: 0.1 }); // Golden-bronze chrome T-clamp

      for (let i = 0; i < count; i += 2) {
        const clamp = new THREE.Mesh(crossClampGeo, crossClampMat);
        clamp.position.set(startX + i * stepX, 1.1, 1.0);
        root.add(clamp);
      }
    }
  };

  // 2. 6-Pipe Pull & Dry Ceiling Cloth Dryer Scene
  const buildCeilingDryerScene = (root: THREE.Group) => {
    // Balcony Ceiling
    const ceilingGeo = new THREE.BoxGeometry(3.8, 0.15, 2.2);
    const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9 });
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.position.set(0, 2.3, 0);
    root.add(ceiling);

    // Side Walls & Railing for Context
    const wallGeo = new THREE.BoxGeometry(0.2, 3.5, 2.2);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const wallLeft = new THREE.Mesh(wallGeo, wallMat);
    wallLeft.position.set(-1.8, 0.6, 0);
    root.add(wallLeft);

    // Wall Tie-off Locking Plate with 6 string toggles
    const tiePlateGeo = new THREE.BoxGeometry(0.05, 0.6, 0.18);
    const tiePlateMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8 });
    const tiePlate = new THREE.Mesh(tiePlateGeo, tiePlateMat);
    tiePlate.position.set(-1.68, 0.2, 0.2);
    root.add(tiePlate);

    // Ceiling Mounting Bracket (Metal Strip with brass pulleys)
    const bracketGeo = new THREE.BoxGeometry(0.12, 0.05, 1.6);
    const bracketMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 });
    
    const bracketFront = new THREE.Mesh(bracketGeo, bracketMat);
    bracketFront.position.set(1.2, 2.2, 0);
    root.add(bracketFront);

    const bracketBack = new THREE.Mesh(bracketGeo, bracketMat);
    bracketBack.position.set(-1.2, 2.2, 0);
    root.add(bracketBack);

    // Dynamic Pipes Group
    const pipesGroup = new THREE.Group();
    pipesGroupRef.current = pipesGroup;
    root.add(pipesGroup);

    const pipeGeo = new THREE.CylinderGeometry(0.02, 0.02, 2.6, 16);
    const pipeMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.95,
      roughness: 0.15,
    });

    const dropDistance = (dryerDropLevel / 100) * 1.4;

    for (let p = 0; p < 6; p++) {
      const zPos = -0.65 + p * 0.26;
      const pipeContainer = new THREE.Group();
      pipeContainer.position.set(0, 2.0 - dropDistance, zPos);

      // SS Pipe
      const pipeMesh = new THREE.Mesh(pipeGeo, pipeMat);
      pipeMesh.rotation.z = Math.PI / 2;
      pipeContainer.add(pipeMesh);

      // Pipe End Caps (White plastic/rubber like in user's photos)
      const capGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.05, 12);
      const capMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
      
      const capL = new THREE.Mesh(capGeo, capMat);
      capL.rotation.z = Math.PI / 2;
      capL.position.set(-1.3, 0, 0);
      pipeContainer.add(capL);

      const capR = new THREE.Mesh(capGeo, capMat);
      capR.rotation.z = Math.PI / 2;
      capR.position.set(1.3, 0, 0);
      pipeContainer.add(capR);

      // Cords connecting to ceiling
      const cordGeo = new THREE.CylinderGeometry(0.004, 0.004, 0.3 + dropDistance, 8);
      const cordMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      
      const cordL = new THREE.Mesh(cordGeo, cordMat);
      cordL.position.set(-1.1, (0.3 + dropDistance) / 2, 0);
      pipeContainer.add(cordL);

      const cordR = new THREE.Mesh(cordGeo, cordMat);
      cordR.position.set(1.1, (0.3 + dropDistance) / 2, 0);
      pipeContainer.add(cordR);

      pipesGroup.add(pipeContainer);
    }
  };

  // 3. Garware Anti-Pigeon & Duct Safety Net Scene
  const buildSafetyNetScene = (root: THREE.Group) => {
    // Multi-storey Ventilation Duct Shaft / High-Rise Window Opening
    const frameGeo = new THREE.BoxGeometry(3.6, 3.2, 0.3);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.set(0, 0.5, 0);
    root.add(frame);

    // Inner Open Void
    const innerVoidGeo = new THREE.BoxGeometry(3.2, 2.8, 0.35);
    const innerVoidMat = new THREE.MeshBasicMaterial({ color: 0x090d16 });
    const innerVoid = new THREE.Mesh(innerVoidGeo, innerVoidMat);
    innerVoid.position.set(0, 0.5, 0);
    root.add(innerVoid);

    // Translucent Virgin HDPE Square Mesh (Procedural 3D Netting)
    const netGroup = new THREE.Group();
    netGroup.position.set(0, 0.5, 0.16);

    const netLineMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 });
    
    // Vertical mesh strands
    const vStrandGeo = new THREE.CylinderGeometry(0.004, 0.004, 2.75, 4);
    for (let x = -1.55; x <= 1.55; x += 0.14) {
      const strand = new THREE.Mesh(vStrandGeo, netLineMat);
      strand.position.set(x, 0, 0);
      netGroup.add(strand);
    }

    // Horizontal mesh strands
    const hStrandGeo = new THREE.CylinderGeometry(0.004, 0.004, 3.1, 4);
    for (let y = -1.35; y <= 1.35; y += 0.14) {
      const strand = new THREE.Mesh(hStrandGeo, netLineMat);
      strand.rotation.z = Math.PI / 2;
      strand.position.set(0, y, 0);
      netGroup.add(strand);
    }

    // Heavy Border Anchor Rope (Stainless wire perimeter)
    const borderRopeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.8 });
    const borderGeo = new THREE.BoxGeometry(3.14, 2.8, 0.02);
    const borderWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(borderGeo),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 2 })
    );
    netGroup.add(borderWire);

    root.add(netGroup);
  };

  // 4. Polycarbonate & SS Anti-Bird Spikes Scene
  const buildBirdSpikesScene = (root: THREE.Group) => {
    // Parapet Ledge / AC Unit Body
    const ledgeGeo = new THREE.BoxGeometry(3.6, 0.4, 1.2);
    const ledgeMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4 });
    const ledge = new THREE.Mesh(ledgeGeo, ledgeMat);
    ledge.position.set(0, -0.4, 0);
    root.add(ledge);

    // AC Louver Grille Texture
    const acGrilleGeo = new THREE.BoxGeometry(2.8, 0.8, 0.8);
    const acGrilleMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3 });
    const acUnit = new THREE.Mesh(acGrilleGeo, acGrilleMat);
    acUnit.position.set(0, 0.2, -0.4);
    root.add(acUnit);

    // Polycarbonate Base Strip
    const baseGeo = new THREE.BoxGeometry(3.2, 0.03, 0.25);
    const baseMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      transparent: true,
      roughness: 0.1,
    });
    const baseStrip = new THREE.Mesh(baseGeo, baseMat);
    baseStrip.position.set(0, -0.18, 0.3);
    root.add(baseStrip);

    // Multi-Directional Pointed Spikes (Matching user's studio spike photos)
    const spikeGeo = new THREE.ConeGeometry(0.008, 0.4, 8);
    const spikeMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.8,
      transparent: true,
      roughness: 0.1,
      metalness: 0.1,
    });

    for (let sx = -1.5; sx <= 1.5; sx += 0.18) {
      // Center spike (straight up)
      const sCenter = new THREE.Mesh(spikeGeo, spikeMat);
      sCenter.position.set(sx, 0.02, 0.3);
      root.add(sCenter);

      // Angled left spike
      const sLeft = new THREE.Mesh(spikeGeo, spikeMat);
      sLeft.position.set(sx, 0.0, 0.24);
      sLeft.rotation.x = -0.45;
      root.add(sLeft);

      // Angled right spike
      const sRight = new THREE.Mesh(spikeGeo, spikeMat);
      sRight.position.set(sx, 0.0, 0.36);
      sRight.rotation.x = 0.45;
      root.add(sRight);

      // Cross fan spikes
      const sFarL = new THREE.Mesh(spikeGeo, spikeMat);
      sFarL.position.set(sx - 0.03, -0.02, 0.3);
      sFarL.rotation.z = 0.35;
      root.add(sFarL);

      const sFarR = new THREE.Mesh(spikeGeo, spikeMat);
      sFarR.position.set(sx + 0.03, -0.02, 0.3);
      sFarR.rotation.z = -0.35;
      root.add(sFarR);
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex flex-col">
      
      {/* Top 3D Viewport Toolbar */}
      {showControls && (
        <div className="relative z-20 bg-slate-900/85 backdrop-blur-md border-b border-slate-800/80 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => handleModeSwitch('grill')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                mode === 'grill' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SS 316 Grill 3D
            </button>
            <button
              type="button"
              onClick={() => handleModeSwitch('dryer')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                mode === 'dryer' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Pull & Dry 3D
            </button>
            <button
              type="button"
              onClick={() => handleModeSwitch('net')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                mode === 'net' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Safety Net 3D
            </button>
            <button
              type="button"
              onClick={() => handleModeSwitch('spikes')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                mode === 'spikes' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bird Spikes 3D
            </button>
          </div>

          {/* Lighting Controls (Day / Sunset / Night) */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-[11px] hidden sm:inline">Lighting:</span>
            <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setLighting('day')}
                className={`p-1.5 rounded-lg transition-all ${
                  lighting === 'day' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Bright Daylight ☀️"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setLighting('sunset')}
                className={`p-1.5 rounded-lg transition-all ${
                  lighting === 'sunset' ? 'bg-amber-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Sunset Golden Hour 🌅"
              >
                <Sunset className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setLighting('night')}
                className={`p-1.5 rounded-lg transition-all ${
                  lighting === 'night' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Night City Corridor 🌙"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Auto-Rotate Toggle */}
            <button
              type="button"
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              className={`p-1.5 rounded-xl border transition-all ${
                isAutoRotate 
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                  : 'bg-slate-950/80 text-slate-400 border-slate-800'
              }`}
              title={isAutoRotate ? "Pause 3D Orbit" : "Resume 3D Orbit"}
            >
              <Rotate3d className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

      {/* 3D WebGL Canvas Viewport */}
      <div 
        ref={containerRef} 
        style={{ height }} 
        className="w-full relative cursor-grab active:cursor-grabbing overflow-hidden"
      >
        {/* Background Sky Backdrop Gradient depending on lighting */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-colors duration-700 -z-10 ${
            lighting === 'day'
              ? 'bg-gradient-to-b from-sky-900/60 via-slate-900 to-slate-950'
              : lighting === 'sunset'
              ? 'bg-gradient-to-b from-orange-950/60 via-amber-950/30 to-slate-950'
              : 'bg-gradient-to-b from-indigo-950/80 via-slate-950 to-slate-950'
          }`}
        />

        {/* 3D Navigation Hint Pill */}
        <div className="absolute bottom-4 left-4 pointer-events-none z-10 flex items-center gap-2 bg-slate-900/85 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-xl text-[11px] font-semibold text-slate-300">
          <Rotate3d className="w-3.5 h-3.5 text-amber-400 animate-spin" />
          <span>Click & Drag to Rotate in 3D (360°)</span>
        </div>

        {/* Live Active Spec HUD Overlay */}
        <div className="absolute top-4 right-4 z-10 pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700 p-3 rounded-2xl shadow-xl max-w-xs text-xs space-y-2">
          {mode === 'grill' && (
            <>
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 font-bold text-amber-400">
                <span>SS 316 Marine Invisible Grill</span>
                <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded text-[10px]">800+ KG</span>
              </div>
              
              <div className="flex items-center justify-between text-slate-300">
                <span>Wire Spacing:</span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setWireSpacing('2inch')}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      wireSpacing === '2inch' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    2" Child Safe
                  </button>
                  <button
                    type="button"
                    onClick={() => setWireSpacing('3inch')}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      wireSpacing === '3inch' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    3" Standard
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>Cross-Clips (T-Locks):</span>
                <button
                  type="button"
                  onClick={() => setHasCrossClips(!hasCrossClips)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    hasCrossClips ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {hasCrossClips ? 'ON (Zero Sag)' : 'OFF'}
                </button>
              </div>

              <div className="pt-1.5 border-t border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsEmergencyCutActive(!isEmergencyCutActive)}
                  className={`w-full flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg text-[10px] font-bold transition-all ${
                    isEmergencyCutActive 
                      ? 'bg-rose-600 text-white' 
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  <Scissors className="w-3 h-3 text-amber-400" />
                  <span>{isEmergencyCutActive ? 'Reset Fire Rescue Cut' : 'Simulate 3s Fire Rescue Cut'}</span>
                </button>
              </div>
            </>
          )}

          {mode === 'dryer' && (
            <>
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 font-bold text-amber-400">
                <span>Pull & Dry 6-Pipe System</span>
                <span className="bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded text-[10px]">35+ KG Load</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Pull Cord Level:</span>
                  <span className="font-mono text-amber-400">{dryerDropLevel}% Lowered</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={dryerDropLevel}
                  onChange={(e) => setDryerDropLevel(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>

              <p className="text-[10px] text-slate-400">
                Individual smooth brass pulley mechanism. Lower pipes to chest height for easy cloth hanging.
              </p>
            </>
          )}

          {mode === 'net' && (
            <>
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 font-bold text-amber-400">
                <span>Garware Virgin HDPE Mesh</span>
                <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded text-[10px]">UV 10+ Yrs</span>
              </div>
              <p className="text-[11px] text-slate-300">
                100% bird & pigeon repellent for balconies and open building duct shafts. Zero daylight blockage.
              </p>
            </>
          )}

          {mode === 'spikes' && (
            <>
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 font-bold text-amber-400">
                <span>Polycarbonate Bird Spikes</span>
                <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded text-[10px]">Non-Lethal</span>
              </div>
              <p className="text-[11px] text-slate-300">
                UV-stabilized clear base with multi-angle deterrent pins for AC units and window sills.
              </p>
            </>
          )}

        </div>

      </div>

    </div>
  );
};
