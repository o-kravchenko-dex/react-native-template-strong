import React, {FC, memo, useCallback} from "react";
import {FlatList} from "react-native";
import {TitleDescriptionBorder} from "./TitleDescriptionBorder";
import {DateFormat, dateFromFormat} from "~/common/localization/dateFormatter";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Separator} from "~/common/components/Separator";

export const DateFormatList: FC = memo(() => {
  const renderItem = useCallback(({item}: {item: [string, DateFormat]}) => {
    const title = item[1] + "\n" + dateFromFormat(new Date(), item[1]);

    return <TitleDescriptionBorder key={item[0]} title={title} description={item[0]} isLast={true}/>;
  }, []);

  const keyExtractor = useCallback((item: [string, DateFormat]) => {
    return item[0];
  }, []);

  return (
    <FlatList
      data={formats}
      keyExtractor={keyExtractor}
      style={CommonStyles.flexPlatformBackground}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );
});

const formats = Object.entries(DateFormat);
