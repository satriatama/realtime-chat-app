declare type MessageProbs = {
    message: string;
  }
  
declare type ChatItemProps = {
    isLeft: boolean;
    data: MessageProbs[];
  }
  
  declare type ChatSectionProps = {
    user: string;
    isLeft: boolean;
    data: MessageProbs[];
  }

  declare type UserChatData = {
    user: string;
    data: MessageProbs[];
  }
  
  // Interface utama untuk seluruh props yang digunakan di PersonalChatPage
  declare type PersonalChatPageProps = {
    idChat: number;
    user: string;
    date: string;
    time: string;
    dataChat: UserChatData[];
  }

  declare type ChatAvatarProps = {
    id: number,
    onClick: (id: number) => void
    user: string,
    date: string,
    time: string,
    lastMessage: string
  }

  declare type ChatAvatarPropsAl = {
    id: number,
    user: string,
    date: string,
    time: string,
    lastMessage: string
  }

  declare type AvatarData = {
    onClick: (id: number) => void
    data: ChatAvatarPropsAl[];
  }