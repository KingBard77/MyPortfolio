import { ContactShadows, Float, RoundedBox } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

const monitorLines = [
  '#8ed081',
  '#f4a261',
  '#c77dff',
  '#8ecae6',
  '#ffd166',
  '#95d5b2',
  '#ffafcc',
  '#bde0fe',
];

const monitorPalette = {
  frame: '#3e4054',
  frameDark: '#252635',
  screen: '#222830',
  desk: '#ffffff',
  wood: '#c58b45',
  orange: '#ff8a00',
  blue: '#23437b',
  cream: '#f7e7c2',
  green: '#86c300',
  paper: '#f6f2ec',
  noteBlue: '#b9d7ee',
  noteWhite: '#f7f7f7',
  pin: '#f45d63',
};

const Panel = ({ args, position, rotation, color, radius = 0.08 }) => (
  <RoundedBox args={args} position={position} rotation={rotation} radius={radius} smoothness={8}>
    <meshStandardMaterial color={color} roughness={0.62} metalness={0.04} />
  </RoundedBox>
);

const AnimatedCodeLine = ({ color, index, length, side, y }) => {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  useFrame(({ clock }) => {
    if (!meshRef.current || !materialRef.current) return;
    const elapsed = clock.getElapsedTime();
    const wave = Math.sin(elapsed * 2.2 + index * 0.8);
    meshRef.current.scale.x = 0.86 + wave * 0.16;
    materialRef.current.emissiveIntensity = 0.18 + Math.max(0, wave) * 0.45;
  });

  return (
    <mesh
      ref={meshRef}
      position={[0.01 * side, y, -0.041 * side]}
      rotation={[0, side > 0 ? 0 : Math.PI, 0]}
    >
      <boxGeometry args={[length, 0.025, 0.008]} />
      <meshStandardMaterial
        ref={materialRef}
        color={color}
        emissive={color}
        emissiveIntensity={0.18}
      />
    </mesh>
  );
};

const CursorPulse = ({ side = 1 }) => {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.visible = Math.sin(clock.getElapsedTime() * 5.8) > -0.15;
  });

  return (
    <mesh ref={meshRef} position={[0.63, -0.33, -0.041 * side]}>
      <boxGeometry args={[0.025, 0.11, 0.01]} />
      <meshStandardMaterial color="#ffffff" emissive="#8ecae6" emissiveIntensity={0.75} />
    </mesh>
  );
};

const CodeLines = ({ side = 1 }) => {
  const lines = useMemo(
    () =>
      monitorLines.map((color, index) => ({
        color,
        length: 0.42 + ((index * 37) % 46) / 100,
        y: 0.31 - index * 0.085,
      })),
    [],
  );

  return lines.map((line, index) => (
    <AnimatedCodeLine
      key={`${line.color}-${line.y}`}
      color={line.color}
      index={index}
      length={line.length}
      side={side}
      y={line.y}
    />
  ));
};

const CodeDisplay = () => (
  <>
    <CodeLines />
    <CursorPulse />
  </>
);

const Monitor = ({ position, rotation = [0, 0, 0], variant = 'code' }) => (
  <group position={position} rotation={rotation}>
    <Panel
      args={[1.28, 0.78, 0.12]}
      position={[0, 0.52, 0]}
      color={monitorPalette.frame}
      radius={0.12}
    />
    <Panel
      args={[1.08, 0.58, 0.04]}
      position={[0, 0.52, 0.07]}
      color={monitorPalette.screen}
      radius={0.04}
    />
    {variant === 'code' ? (
      <group position={[-0.34, 0.54, 0.095]}>
        <CodeDisplay />
      </group>
    ) : (
      <group position={[-0.43, 0.74, 0.095]}>
        {[0, 1, 2, 3, 4].map((item) => (
          <mesh key={item} position={[0, -item * 0.1, 0]}>
            <boxGeometry args={[0.08, 0.05, 0.012]} />
            <meshStandardMaterial
              color={item === 0 ? '#5a8fd8' : '#414852'}
              emissive={item === 0 ? '#2c6dd1' : '#000000'}
              emissiveIntensity={item === 0 ? 0.2 : 0}
            />
          </mesh>
        ))}
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <mesh key={`line-${item}`} position={[0.2, -item * 0.075, 0]}>
            <boxGeometry args={[0.36 - item * 0.025, 0.018, 0.012]} />
            <meshStandardMaterial color="#cfd5dd" emissive="#9fb4c9" emissiveIntensity={0.08} />
          </mesh>
        ))}
      </group>
    )}
    <Panel
      args={[0.2, 0.08, 0.08]}
      position={[0, 0.09, 0]}
      color={monitorPalette.frameDark}
      radius={0.03}
    />
    <Panel
      args={[0.48, 0.08, 0.28]}
      position={[0, 0, 0]}
      color={monitorPalette.frameDark}
      radius={0.04}
    />
  </group>
);

const Desk = () => (
  <group position={[0.2, -0.72, 0]}>
    <Panel
      args={[3.4, 0.2, 1.18]}
      position={[0, 0.38, 0]}
      color={monitorPalette.desk}
      radius={0.1}
    />
    {[
      [-1.42, -0.22, -0.42],
      [1.42, -0.22, -0.42],
      [-1.42, -0.22, 0.42],
      [1.42, -0.22, 0.42],
    ].map((position) => (
      <mesh key={position.join('-')} position={position}>
        <cylinderGeometry args={[0.055, 0.075, 1.06, 18]} />
        <meshStandardMaterial color={monitorPalette.wood} roughness={0.58} />
      </mesh>
    ))}
  </group>
);

const Developer = () => (
  <group position={[0.15, -0.11, 0.28]} rotation={[0, 0.1, 0]}>
    <mesh position={[0, 0.7, 0]}>
      <sphereGeometry args={[0.34, 36, 36]} />
      <meshStandardMaterial color="#9c6547" roughness={0.74} />
    </mesh>
    <mesh position={[0.1, 0.83, 0.03]} rotation={[0.1, -0.4, 0.5]}>
      <sphereGeometry args={[0.27, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
      <meshStandardMaterial color="#7c4b34" roughness={0.8} />
    </mesh>
    <Panel args={[0.54, 0.58, 0.32]} position={[0, 0.18, 0]} color="#f6f1e8" radius={0.12} />
    <mesh position={[0.29, 0.2, 0.1]} rotation={[0.25, 0, -0.48]}>
      <capsuleGeometry args={[0.06, 0.46, 12, 24]} />
      <meshStandardMaterial color="#f1c9aa" roughness={0.5} />
    </mesh>
    <mesh position={[-0.26, 0.06, 0.08]} rotation={[0.2, 0, 0.45]}>
      <capsuleGeometry args={[0.06, 0.42, 12, 24]} />
      <meshStandardMaterial color="#1d2026" roughness={0.7} />
    </mesh>
    <Panel args={[0.58, 0.58, 0.14]} position={[-0.05, -0.14, 0.2]} color="#f2eee5" radius={0.12} />
  </group>
);

const Chair = () => (
  <group position={[0.02, -0.8, 0.56]}>
    <Panel args={[0.82, 0.16, 0.56]} position={[0, 0.12, 0]} color="#f6f1e8" radius={0.12} />
    <Panel
      args={[0.9, 0.76, 0.15]}
      position={[-0.2, 0.55, 0.16]}
      rotation={[0.12, 0, 0]}
      color="#f6f1e8"
      radius={0.12}
    />
    <mesh position={[0.08, -0.24, 0.16]} rotation={[0, 0, Math.PI / 2]}>
      <torusGeometry args={[0.46, 0.035, 12, 48, Math.PI * 1.18]} />
      <meshStandardMaterial color="#9fa4ad" roughness={0.4} metalness={0.3} />
    </mesh>
  </group>
);

const DeskObjects = () => (
  <group>
    <group position={[-1.26, -0.2, 0.07]}>
      <mesh position={[0, 0.34, 0]}>
        <cylinderGeometry args={[0.14, 0.12, 0.28, 24]} />
        <meshStandardMaterial color="#d6b38d" roughness={0.58} />
      </mesh>
      {[
        ['#71c5e8', -0.07, 0.52, -0.18],
        ['#f56b7f', 0, 0.55, 0.1],
        ['#f2d6a2', 0.08, 0.53, 0.22],
      ].map(([color, x, y, z]) => (
        <mesh key={color} position={[x, y, z]} rotation={[0.4, 0, z]}>
          <cylinderGeometry args={[0.018, 0.018, 0.46, 12]} />
          <meshStandardMaterial color={color} roughness={0.46} />
        </mesh>
      ))}
    </group>

    <group position={[1.42, -0.2, 0.18]}>
      <Panel args={[0.33, 0.34, 0.12]} position={[0, 0.4, 0]} color="#f4a62a" radius={0.04} />
      <mesh position={[0, 0.4, 0.065]}>
        <cylinderGeometry args={[0.085, 0.085, 0.02, 28]} />
        <meshStandardMaterial color="#30303a" roughness={0.45} />
      </mesh>
    </group>

    <group position={[0.92, -0.2, 0.2]}>
      <Panel args={[0.28, 0.22, 0.035]} position={[0, 0.36, 0]} color="#d9edf9" radius={0.02} />
      {[0, 1, 2].map((x) =>
        [0, 1, 2].map((y) => (
          <mesh key={`${x}-${y}`} position={[-0.08 + x * 0.08, 0.3 + y * 0.06, 0.025]}>
            <boxGeometry args={[0.055, 0.04, 0.008]} />
            <meshStandardMaterial color={x === y ? '#3b83ca' : '#79b9e8'} />
          </mesh>
        )),
      )}
    </group>
  </group>
);

const Shelf = () => (
  <Float speed={1.8} rotationIntensity={0.22} floatIntensity={0.22}>
    <group position={[-1.45, 1.62, -0.45]} rotation={[0, 0.12, 0]}>
      <Panel
        args={[1.02, 0.16, 0.28]}
        position={[0, -0.23, 0]}
        color={monitorPalette.cream}
        radius={0.07}
      />
      {[
        ['#d9e2ed', -0.34, 0.05, 0.18],
        ['#f8aa2e', -0.16, 0.08, 0.22],
        ['#ffbf45', 0.05, 0.03, 0.2],
      ].map(([color, x, y]) => (
        <Panel
          key={color}
          args={[0.18, 0.55 + y, 0.2]}
          position={[x, 0.1, 0]}
          color={color}
          radius={0.02}
        />
      ))}
      <mesh position={[0.38, 0.12, 0]}>
        <sphereGeometry args={[0.18, 24, 16]} />
        <meshStandardMaterial color="#f5f0e5" roughness={0.7} />
      </mesh>
      <mesh position={[0.42, 0.36, 0]} rotation={[0.35, 0, -0.35]}>
        <coneGeometry args={[0.11, 0.36, 16]} />
        <meshStandardMaterial color="#8ed800" roughness={0.65} />
      </mesh>
    </group>
  </Float>
);

const Board = () => (
  <Float speed={1.55} rotationIntensity={0.18} floatIntensity={0.18}>
    <group position={[0.75, 1.73, -0.56]} rotation={[0.04, -0.08, 0.03]}>
      <Panel
        args={[1.58, 0.84, 0.12]}
        position={[0, 0, 0]}
        color={monitorPalette.cream}
        radius={0.14}
      />
      <Panel args={[1.38, 0.64, 0.05]} position={[0, 0, 0.05]} color="#a88772" radius={0.08} />
      <PinnedNote
        position={[-0.38, 0.08, 0.1]}
        color={monitorPalette.noteBlue}
        rotation={[0.05, 0, 0.1]}
      />
      <PinnedNote
        position={[0.62, -0.18, 0.12]}
        color={monitorPalette.noteWhite}
        rotation={[-0.05, 0, -0.16]}
      />
    </group>
  </Float>
);

const PinnedNote = ({ position, color, rotation }) => (
  <group position={position} rotation={rotation}>
    <Panel args={[0.36, 0.38, 0.018]} position={[0, 0, 0]} color={color} radius={0.015} />
    <mesh position={[-0.08, 0.15, 0.03]}>
      <sphereGeometry args={[0.065, 24, 16]} />
      <meshStandardMaterial color={monitorPalette.pin} roughness={0.36} />
    </mesh>
    {[0, 1, 2].map((line) => (
      <mesh key={line} position={[0.04, 0.02 - line * 0.08, 0.025]}>
        <boxGeometry args={[0.18 - line * 0.03, 0.012, 0.006]} />
        <meshStandardMaterial color="#b9b9b9" />
      </mesh>
    ))}
  </group>
);

const FloatingImage = () => (
  <Float speed={2} rotationIntensity={0.24} floatIntensity={0.24}>
    <group position={[2.55, 0.95, -0.62]} rotation={[0.08, -0.2, -0.08]}>
      <Panel args={[0.82, 0.58, 0.12]} position={[0, 0, 0]} color="#b9d7ee" radius={0.12} />
      <Panel args={[0.62, 0.38, 0.035]} position={[0, 0, 0.08]} color="#f5f7f8" radius={0.05} />
      <mesh position={[-0.14, -0.02, 0.11]} rotation={[0, 0, 0.2]}>
        <coneGeometry args={[0.2, 0.32, 4]} />
        <meshStandardMaterial color="#d7e2ea" roughness={0.54} />
      </mesh>
      <mesh position={[0.22, 0.12, 0.11]}>
        <sphereGeometry args={[0.11, 24, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} />
      </mesh>
    </group>
  </Float>
);

const PlantLeaf = ({ index, x }) => {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const elapsed = clock.getElapsedTime();
    meshRef.current.rotation.z = x * -1.2 + Math.sin(elapsed * 1.7 + index) * 0.12;
    meshRef.current.position.y = 0.67 + index * 0.02 + Math.sin(elapsed * 1.3 + index) * 0.035;
  });

  return (
    <mesh ref={meshRef} position={[x * 0.45, 0.67 + index * 0.02, 0]} rotation={[0.5, 0, x * -1.2]}>
      <sphereGeometry args={[0.14, 20, 14]} />
      <meshStandardMaterial color={index % 2 ? '#a7df00' : monitorPalette.green} roughness={0.52} />
    </mesh>
  );
};

const Plant = () => (
  <group position={[2.35, -0.8, 0.25]}>
    <mesh position={[0, 0.28, 0]}>
      <cylinderGeometry args={[0.25, 0.33, 0.34, 32]} />
      <meshStandardMaterial color="#f2f2ee" roughness={0.66} />
    </mesh>
    <mesh position={[0, 0.08, 0]}>
      <cylinderGeometry args={[0.27, 0.3, 0.14, 32]} />
      <meshStandardMaterial color="#a47a61" roughness={0.68} />
    </mesh>
    {[-0.34, -0.18, 0, 0.18, 0.34].map((x, index) => (
      <PlantLeaf key={x} index={index} x={x} />
    ))}
  </group>
);

const Rug = () => (
  <group position={[-0.02, -1.42, 0.38]} rotation={[-Math.PI / 2, 0, 0]}>
    {[1.85, 1.35, 0.86].map((radius, index) => (
      <mesh key={radius} position={[0, 0, index * 0.003]}>
        <ringGeometry args={[radius - 0.16, radius, 72, 1]} />
        <meshStandardMaterial
          color={index === 1 ? '#f2c84b' : '#f4a62a'}
          roughness={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
    ))}
    <mesh position={[0, 0, 0.01]}>
      <circleGeometry args={[0.76, 72]} />
      <meshStandardMaterial color="#f6e87a" roughness={0.78} side={THREE.DoubleSide} />
    </mesh>
  </group>
);

const cameraFrom = new THREE.Vector3(0.35, 1.05, 6.35);
const cameraTo = new THREE.Vector3(1.2, 0.35, 1.95);
const lookFrom = new THREE.Vector3(0, 0, 0);
const lookTo = new THREE.Vector3(1.25, 0.1, -0.3);

const sceneShift = (width) => {
  if (width > 1180) return 0.155;
  if (width > 900) return 0.12;
  return 0;
};

const CameraRig = ({ progressRef }) => {
  const easedRef = useRef(0);
  const look = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ camera, size }, delta) => {
    easedRef.current = THREE.MathUtils.damp(easedRef.current, progressRef?.current ?? 0, 6, delta);
    const progress = easedRef.current;
    const shift = sceneShift(window.innerWidth) * (1 - progress);
    camera.position.lerpVectors(cameraFrom, cameraTo, progress);
    look.lerpVectors(lookFrom, lookTo, progress);
    camera.lookAt(look);
    camera.setViewOffset(size.width, size.height, -shift * size.width, 0, size.width, size.height);
  });

  return null;
};

const WorkspaceModel = ({ still }) => {
  const groupRef = useRef(null);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current || still) return;
    const elapsed = clock.getElapsedTime();
    groupRef.current.rotation.y = -0.26 + Math.sin(elapsed * 0.45) * 0.1 + pointer.x * 0.14;
    groupRef.current.rotation.x = -0.04 + Math.sin(elapsed * 0.36) * 0.035 + pointer.y * 0.05;
    groupRef.current.rotation.z = Math.sin(elapsed * 0.32) * 0.018;
    groupRef.current.position.x = 0.72 + Math.sin(elapsed * 0.32) * 0.055;
    groupRef.current.position.y = -0.18 + Math.sin(elapsed * 0.85) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0.72, -0.18, 0]} rotation={[-0.04, -0.26, 0]} scale={0.86}>
      <Rug />
      <Desk />
      <Chair />
      <Developer />
      <Monitor position={[-0.66, -0.28, -0.28]} rotation={[0, 0.1, 0]} variant="panel" />
      <Monitor position={[0.62, -0.25, -0.28]} rotation={[0, -0.1, 0]} />
      <DeskObjects />
      <Shelf />
      <Board />
      <FloatingImage />
      <Plant />
    </group>
  );
};

const HeroScene = ({ progressRef, eventSource, active = true }) => {
  const still = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);

  return (
    <Canvas
      camera={{ position: [0.35, 1.05, 6.35], fov: 38 }}
      dpr={[1, 1.7]}
      frameloop={active ? 'always' : 'never'}
      eventSource={eventSource}
      eventPrefix="client"
      shadows
    >
      <color attach="background" args={['#f5efe5']} />
      <ambientLight intensity={0.95} />
      <directionalLight
        position={[4, 6, 5]}
        intensity={2.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight position={[-4, 3, 5]} intensity={0.55} angle={0.45} penumbra={0.9} />
      <Suspense fallback={null}>
        <WorkspaceModel still={still} />
        <ContactShadows position={[0, -1.43, 0]} opacity={0.35} scale={7} blur={2.5} far={2.3} />
      </Suspense>
      <CameraRig progressRef={progressRef} />
    </Canvas>
  );
};

export default HeroScene;
