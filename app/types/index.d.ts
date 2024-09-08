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