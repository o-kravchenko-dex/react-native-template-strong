/* eslint-disable max-len,camelcase */
export const ru = {
    translation: {
        common: {
            all: "Все",
            search: "Поиск",
            selectPhoto: "Выбрать фото",
            takePhoto: "Сделать фото",
            chooseFromLibrary: "Выбрать из галлереи",
            cancel: "Отмена",
            delete: "Удалить",
            refresh: "Обновить",
            back: "Назад",
            next: "Вперёд",
            done: "Готово",
            ok: "Ок",
            continue: "Продолжить",
            save: "Сохранить",
            loading: "Загрузка",
            photo: "фото",
            yes: "Да",
            no: "Нет",
            areYouSure: "Вы уверены?",
            warning: "Внимание",
            success: "Успех",
            select: "Выбрать",
            dataSuccessfullyUpdated: "Данные были успешно обновлены",
            settings: "Настройки",
            buy: "Купить",
            info: "Инфо",
            proposeNotifications1: "Включи уведомления в разделе ",
            proposeNotifications2: "“Настройки”",
            notNow: "Не сейчас",
            skip: "Пропустить",
            currencySymbol: "₽",
        },
        date: {
            days: "дни",
            hours: "часы",
            minutes: "минуты",
            seconds: "секунды",
        },
        empty: {
            noData: "No data",
            checkThisPageLater: "Check this page later",
        },
        errors: {
            listErrorTitle: "Ошибка загрузки списка",
            tryAgain: "Попробовать еще раз",
            notAuthorized: "Этот контент доступен только авторизованным пользователям.\nПожалуйста войдите в учётную запись.",
            notFound: "По вашему запросу ничего не найдено",
            connectionError: "Ошибка подключения к серверу попробуйте позже",
            thisFieldIsRequired: "This field is required.",
            unknownErrorHasOccurred: "Возникла непредвиденная ошибка",
            failedToOpenUrl: "Failed to open URL. Check that the app is installed.",
            pleaseCheckYourInternetConnection: "Please check your Internet connection.",
            invalidCredentials: "Пользователь не найден. Проверьте свои учетные данные или запросите новый пароль",
            invalidEmail: "Invalid Email",
            invalidPhoneNumber: "Invalid phone number",
            invalidFullName: "Invalid full name",
            invalidFromDate: "{{fromField}} can't be later than {{toField}}",
            invalidToDate: "{{toField}} can't be earlier than {fromField}",
            datesCantBeEqual: "{{fromField}} and {{toField}} can't be equal",
            mobileDataIsTurnedOff: "Mobile Data is Turned Off",
            turnOnMobileData: "Turn on mobile data or use Wi-Fi to access data.",
            error: "Ошибка",
        },
        onboarding: {
            welcomeToApp: "",
            firstHeader: "Добро пожаловать в Maxmodal",
            firstBody: "Мультимодальная сеть транспорта и логистики",
            secondHeader: "Сегмент контейнерных перевозок",
            secondBody: "Помогает автоматизировать управление тарифами\n" +
                "и бесшовно организовать перевозки по всему миру",
            thirdHeader: "Повышает эффективность",
            thirdBody: "управления тарифами, цепочками поставок, заявками на перевозки и коммуникацией между участниками отрасли",
            forthHeader: "Объединяет в одном месте",
            forthBody: "всех игроков рынка транспорта и логистики в профессиональную сеть",
            allowPush: "Разрешить уведомления",
            pushDeniedDialog: {
                title: "Включите уведомления приложения Maxmodal",
                text: "Разрешить приложению отправку вам уведомлений можно в настройках вашего устройства",
                cancel: "Отменить",
                settings: "Перейти в настройки",
            },
        },
        authentication: {
            login: "Войти",
            register: "Зарегистрироваться",
            authScreenTitle: "Единый кабинет\nболельщика",
            phoneNumber: "Номер телефона",
            email: 'Эл. почта',
            emailInUse: "Адрес электронной почты уже используется",
            password: "Пароль",
            forgotPassword: "Забыли пароль?",
            doNotHaveAccountYet: "У вас еще нет аккаунта? ",
            enterEmail: "Введите логин",
            enterPassword: "Введите пароль",
            toRegister: "Зарегистрируйтесь",
            wrongCode: "Неверный пароль",
            send: "Отправить",
            emailHint: "Введите ваш эл. адрес, чтобы\n восстановить доступ к своему аккаунту",
            resetPasswordTitle: "на указанный номер будет выслан новый пароль",
            resetPasswordHint: "Если у вас уже есть абонемент или карта болельщика, то укажите привязанный номер телефона.",
            resendCode: "Отправить код ещё раз",
            resendCodeIn: "Повторно отправить код через {{interval}}",
            passwordHint: "Пароль можно будет поменять в профиле",
            passwordSend: "пароль отправлен по номеру\n",
            alreadyHaveAccount: "Уже есть аккаунт? ",
            name: "Имя",
            surname: "Фамилия",
            middleName: "Отчество",
        },
        pages: {
            main: "Главная",
            matches: "Матчи",
            news: "Новости",
            shop: "Покупки",
            login: "Вход",
            forgotPassword: "Забыли пароль",
            leftSideMenu: "Left Side Menu",
            rightSideMenu: "Right Side Menu",
            myTickets: "Мои билеты",
            menu: "Меню",
            inDev: "В разработке",
            selectDate: "Select date",
            storybook: "Storybook",
            cart: "Корзина",
            search: "Поиск",
            settings: "Настройки",
        },
        validation: {
            required: "Обязательное поле",
            phoneFormat: "Неверный номер телефона",
            passwordFormat: "Пароль должен быть не короче 8 символов, состоять из символов латинского алфавита, содержать строчные и прописные буквы и цифры",
            nameFormat: "Длина должна быть от 1 до 50 символов",
            emailFormat: "Должно соответствовать формату: a@a.aa",
        },
        menu: {
            enter: "Войти",
            faq: "FAQ",
            contacts: "Контакты",
            additional: "Дополнительно",
            settings: "НАСТРОЙКИ",
            ourSocials: "Наши соц. сети",
            more: "подробнее",
        },
        editProfile: {
            screenTitle: "РЕДАКТИРОВАТЬ ПРОФИЛЬ",
            name: "Имя",
            surname: "Фамилия",
            lastName: "Отчество",
            phoneNumber: "Номер телефона",
            email: "E-mail",
            dayOfBirth: "Дата рождения",
            city: "Город",
            logout: "Выйти",
            logoutDialogTitle: "Подтвердите выход",
            logoutDialogMessage: "Вы действительно хотите выйти из аккаунта?",
            applyChanges: "сохранить изменения",
            exit: "Выйти",
            changePhoto: "Изменить фото",
        },
        settings: {
            screenTitle: "НАСТРОЙКИ",
            language: "ЯЗЫК",
            notifications: "уведомления",
            rateApp: "Оценка приложения",
            privacyPolicy: "Политика конфиденциальности",
        },
    },
};
