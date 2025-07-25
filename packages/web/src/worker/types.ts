import type {
  CompleteEvent,
  DestroyEvent,
  FrameEvent,
  FreezeEvent,
  LoadErrorEvent,
  LoadEvent,
  LoopEvent,
  PauseEvent,
  PlayEvent,
  ReadyEvent,
  RenderErrorEvent,
  RenderEvent,
  StopEvent,
  UnfreezeEvent,
} from '../event-manager';
import type { Config, Layout, Mode, RenderConfig } from '../types';

import type { DotLottieInstanceState } from './dotlottie';

export interface MethodParamsMap {
  animationSize: {
    instanceId: string;
  };
  create: {
    config: Config;
    height: number;
    instanceId: string;
    width: number;
  };
  destroy: {
    instanceId: string;
  };
  freeze: {
    instanceId: string;
  };
  getDotLottieInstanceState: {
    instanceId: string;
  };
  getStateMachineListeners: {
    instanceId: string;
  };
  load: {
    config: Omit<Config, 'canvas'>;
    instanceId: string;
  };
  loadAnimation: {
    animationId: string;
    instanceId: string;
  };
  loadStateMachine: {
    instanceId: string;
    stateMachineId: string;
  };
  loadStateMachineData: {
    instanceId: string;
    stateMachineData: string;
  };
  pause: {
    instanceId: string;
  };
  play: {
    instanceId: string;
  };
  postPointerDownEvent: {
    instanceId: string;
    x: number;
    y: number;
  };
  postPointerEnterEvent: {
    instanceId: string;
    x: number;
    y: number;
  };
  postPointerExitEvent: {
    instanceId: string;
    x: number;
    y: number;
  };
  postPointerMoveEvent: {
    instanceId: string;
    x: number;
    y: number;
  };
  postPointerUpEvent: {
    instanceId: string;
    x: number;
    y: number;
  };
  resize: {
    height: number;
    instanceId: string;
    width: number;
  };
  setBackgroundColor: {
    backgroundColor: string;
    instanceId: string;
  };
  setFrame: {
    frame: number;
    instanceId: string;
  };
  setLayout: {
    instanceId: string;
    layout: Layout;
  };
  setLoop: {
    instanceId: string;
    loop: boolean;
  };
  setMarker: {
    instanceId: string;
    marker: string;
  };
  setMode: {
    instanceId: string;
    mode: Mode;
  };
  setRenderConfig: {
    instanceId: string;
    renderConfig: RenderConfig;
  };
  setSegment: {
    instanceId: string;
    segment: [number, number];
  };
  setSpeed: {
    instanceId: string;
    speed: number;
  };
  setTheme: {
    instanceId: string;
    themeId: string;
  };
  setThemeData: {
    instanceId: string;
    themeData: string;
  };
  setUseFrameInterpolation: {
    instanceId: string;
    useFrameInterpolation: boolean;
  };
  setViewport: {
    height: number;
    instanceId: string;
    width: number;
    x: number;
    y: number;
  };
  setWasmUrl: {
    url: string;
  };
  startStateMachine: {
    instanceId: string;
  };
  stop: {
    instanceId: string;
  };
  stopStateMachine: {
    instanceId: string;
  };
  tween: {
    duration: number;
    frame: number;
    instanceId: string;
  };
  tweenToMarker: {
    duration: number;
    instanceId: string;
    marker: string;
  };
  unfreeze: {
    instanceId: string;
  };
}

export interface RpcRequest<T extends keyof MethodParamsMap> {
  id: string;
  method: T;
  params: MethodParamsMap[T];
}

export interface MethodResultMap {
  animationSize: {
    height: number;
    width: number;
  };
  create: {
    instanceId: string;
  };
  destroy: void;
  freeze: void;
  getDotLottieInstanceState: {
    state: DotLottieInstanceState;
  };
  getStateMachineListeners: string[];
  load: void;
  loadAnimation: void;
  loadStateMachine: boolean;
  loadStateMachineData: boolean;
  onComplete: {
    event: CompleteEvent;
    instanceId: string;
  };
  onDestroy: {
    event: DestroyEvent;
    instanceId: string;
  };
  onFrame: {
    event: FrameEvent;
    instanceId: string;
  };
  onFreeze: {
    event: FreezeEvent;
    instanceId: string;
  };
  onLoad: {
    event: LoadEvent;
    instanceId: string;
  };
  onLoadError: {
    event: LoadErrorEvent;
    instanceId: string;
  };
  onLoop: {
    event: LoopEvent;
    instanceId: string;
  };
  onPause: {
    event: PauseEvent;
    instanceId: string;
  };
  onPlay: {
    event: PlayEvent;
    instanceId: string;
  };
  onReady: {
    event: ReadyEvent;
    instanceId: string;
  };
  onRender: {
    event: RenderEvent;
    instanceId: string;
  };
  onRenderError: {
    event: RenderErrorEvent;
    instanceId: string;
  };
  onStop: {
    event: StopEvent;
    instanceId: string;
  };
  onUnfreeze: {
    event: UnfreezeEvent;
    instanceId: string;
  };
  pause: void;
  play: void;
  postPointerDownEvent: number | undefined;
  postPointerEnterEvent: number | undefined;
  postPointerExitEvent: number | undefined;
  postPointerMoveEvent: number | undefined;
  postPointerUpEvent: number | undefined;
  resize: void;
  setBackgroundColor: void;
  setFrame: void;
  setLayout: void;
  setLoop: void;
  setMarker: void;
  setMode: void;
  setRenderConfig: void;
  setSegment: void;
  setSpeed: void;
  setTheme: boolean;
  setThemeData: boolean;
  setUseFrameInterpolation: void;
  setViewport: boolean;
  setWasmUrl: void;
  startStateMachine: boolean;
  stop: void;
  stopStateMachine: boolean;
  tween: boolean;
  tweenToMarker: boolean;
  unfreeze: void;
}

export interface RpcResponse<U extends keyof MethodResultMap> {
  error?: string;
  id: string;
  method: U;
  result: MethodResultMap[U];
}
