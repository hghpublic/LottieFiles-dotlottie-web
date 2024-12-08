'use client';

import type { DotLottie, Config } from '@lottiefiles/dotlottie-web';
import { useEffect, type ComponentProps, type RefCallback } from 'react';

import { useDotLottie } from './use-dotlottie';
import useStableCallback from './use-stable-callback';

export type DotLottieReactProps = Omit<Config, 'canvas'> &
  ComponentProps<'canvas'> & {
    animationId?: string;
    dotLottieRefCallback?: RefCallback<DotLottie>;
    playOnHover?: boolean;
    themeData?: string;
    themeId?: string;
  };

export const DotLottieReact = ({
  animationId,
  autoplay,
  backgroundColor,
  data,
  dotLottieRefCallback,
  loop,
  marker,
  mode,
  playOnHover,
  renderConfig,
  segment,
  speed,
  src,
  themeData,
  themeId,
  useFrameInterpolation,
  ...props
}: DotLottieReactProps): JSX.Element => {
  const { DotLottieComponent, dotLottie } = useDotLottie({
    data,
    mode,
    speed,
    src,
    autoplay,
    loop,
    segment,
    renderConfig,
    backgroundColor,
    useFrameInterpolation,
    playOnHover,
    marker,
    themeId,
    animationId,
    themeData,
  });

  const stableDotLottieRefCallback =
    typeof dotLottieRefCallback === 'function' ? useStableCallback(dotLottieRefCallback) : undefined;

  useEffect(() => {
    if (typeof stableDotLottieRefCallback === 'function') {
      stableDotLottieRefCallback(dotLottie);
    }
  }, [stableDotLottieRefCallback, dotLottie]);

  return <DotLottieComponent {...props} />;
};
