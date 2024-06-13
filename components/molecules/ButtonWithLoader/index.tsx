import { PressableBasic, TextBasic } from "@/components/atoms";
import { IPressableBasic } from "@/typings";
import React, { FC } from "react";


export const ButtonWithLoader: FC<Partial<IPressableBasic>> = ({
  style,
  styleText,
  title,
  navigateTo,
  handleOnPress,
}) => {
  return (
    <PressableBasic
      style={style}
      navigateTo={navigateTo}
      handleOnPress={() => handleOnPress?.()}
    >
      <TextBasic message={title} style={styleText} />
    </PressableBasic>
  );
};
