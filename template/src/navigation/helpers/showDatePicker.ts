import {IDatePickerProps} from "../../common/components/DatePickerOverlay";
import {Pages} from "../pages";
import {isIos} from "../../core/theme";
import {localization} from "../../common/localization";
import {Layout, Navigation} from "react-native-navigation";

export function showDatePicker(params: IDatePickerProps) {
  const data: Layout<IDatePickerProps> = {
    component: {
      name: Pages.datePicker.name,
      id: Pages.datePicker.id,
      passProps: params,
      options: {
        topBar: {
          title: {
            text: localization.pages.selectDate,
          },
        },
      },
    },
  };

  if (isIos) {
    Navigation.showModal<IDatePickerProps>({
      stack: {
        children: [data],
      },
    });
  } else {
    Navigation.showOverlay<IDatePickerProps>(data);
  }
}
