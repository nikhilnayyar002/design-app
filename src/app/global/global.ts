import { AccountItems, Sync_Frequency, Sync_Type, AccountTable } from "./types";

export const ACCOUNTS_DISPLAYED_COLUMNS = [
  "ACCOUNT",
  "DATA ITEMS",
  "DISK SPACE USED",
  "SYNC FREQUENCY",
  "SYNC TYPE",
  "LAST SYNC",
  "NEXT SYNC"
];
export const ACCOUNTS_DATA: AccountTable[] = [
  {
    account: { img: "/assets/icons/google3.svg", name: "prakriti.malik" },
    data_items: "3431 Emails yo hey hello",
    disk_space_used: "17GB",
    sync_frequency: Sync_Frequency.Monthly,
    sync_type: Sync_Type.Manual,
    last_sync: "20 July 2019",
    next_sync: "Reminder on 20 August 2019"
  },
  {
    account: { img: "/assets/icons/github.svg", name: "prakritimalik" },
    data_items: "37 Repositories",
    disk_space_used: "1.1GB",
    sync_frequency: Sync_Frequency.Weekly,
    sync_type: Sync_Type.Automated,
    last_sync: "24 July 2019",
    next_sync: "31 July 2019"
  },
  {
    account: {
      img: "/assets/icons/twitter-with-circle.svg",
      name: "@praktweets"
    },
    data_items: "400 Tweets",
    disk_space_used: "100MB",
    sync_frequency: Sync_Frequency.Weekly,
    sync_type: Sync_Type.Automated,
    last_sync: "23 July 2019",
    next_sync: "30 July 2019"
  }
];

export const ACCOUNTS: AccountItems[] = [
  {
    img: "https://img.icons8.com/color/48/000000/whatsapp.png",
    name: "WhatsApp"
  },
  {
    img: "https://img.icons8.com/color/48/000000/linkedin.png",
    name: "LinkedIn"
  },
  {
    img: "https://img.icons8.com/color/48/000000/facebook-messenger.png",
    name: "Messenger"
  },
  {
    img: "https://img.icons8.com/color/48/000000/ios-photos.png",
    name: "iPhotos"
  },
  {
    img: "https://img.icons8.com/cute-clipart/48/000000/instagram-new.png",
    name: "Instagram"
  },
  {
    img: "https://img.icons8.com/color/48/000000/ms-outlook.png",
    name: "Outlook"
  },
  {
    img: "/assets/icons/hangouts.png",
    name: "Hangouts"
  }
];
