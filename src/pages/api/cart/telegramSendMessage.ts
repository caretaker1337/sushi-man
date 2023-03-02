import { TelegramClient } from "messaging-api-telegram";
import { ParseMode } from "messaging-api-telegram/dist/TelegramTypes";

const accessToken = "2135558519:AAHY1FPlgWls7tt5b5PSD1q9MkQ2IoahtXc";
const chatId =
  process.env.NODE_ENV === "production" ? "-470404095" : "-727652121";
const telegram = new TelegramClient({ accessToken });

const telegramSendMessage = (body: string, callback?: () => void): void => {
  telegram
    .sendMessage(chatId, body, {
      disableNotification: false,
      parseMode: ParseMode.HTML,
    })
    .then(callback);
};

export { telegramSendMessage };
