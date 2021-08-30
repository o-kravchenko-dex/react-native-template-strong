import React, {FC, FunctionComponent, memo, useCallback, useMemo} from "react";
import {StyleSheet, Text, TextStyle, ViewStyle} from "react-native";
import {Colors, CommonSizes, CommonStyles, PlatformColorsIOS} from "../../core/theme";
import {RadioIcon} from "./RadioIcon";
import {TouchablePlatform} from "./TouchablePlatform";
import {platformMixedColor} from "../helpers";

interface IIconComponentProps {
  isSelected: boolean;
  disabled?: boolean;
}

interface IProps extends IIconComponentProps {
  id: string;
  label: string;
  onPress: (id: string, nextValue: boolean) => void;
  IconComponent?: FunctionComponent<IIconComponentProps>;
}

export const RadioButton: FC<IProps> = memo(({isSelected, label, onPress, disabled, IconComponent, id}) => {
  const onButtonPress = useCallback(() => {
    onPress(id, !isSelected);
  }, [onPress, isSelected, id]);

  const labelStyle = useMemo(() => {
    return disabled ? styles.labelDisabled : styles.label;
  }, [disabled]);

  return (
    <TouchablePlatform style={styles.container} highlightColor={Colors.black} onPress={onButtonPress} disabled={disabled}>
      {IconComponent && <IconComponent disabled={disabled} isSelected={isSelected} />}
      <Text style={labelStyle} numberOfLines={1}>
        {label}
      </Text>
    </TouchablePlatform>
  );
});

RadioButton.defaultProps = {
  IconComponent: RadioIcon,
};

const commonLabel: TextStyle = {
  ...CommonStyles.normalText,
  flex: 1,
  paddingLeft: CommonSizes.spacing.extraSmall,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: CommonSizes.spacing.medium,
    alignItems: "center",
  } as ViewStyle,
  label: {
    ...commonLabel,
  } as TextStyle,
  labelDisabled: {
    ...commonLabel,
    color: platformMixedColor(PlatformColorsIOS.systemFill, Colors.black),
  } as TextStyle,
});
