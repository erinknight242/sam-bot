export type Message = {
  user?: string;
  client_msg_id: string;
  type: string;
  text: string;
  ts: string;
  blocks: Array<Block>;
  team: string;
  channel: string;
  event_ts: string;
  channel_type: string;
};

export type Block = {
  type: string;
  block_id: string;
  elements: Array<Section>;
};

export type Section = {
  type: string;
  elements: Array<Element>;
};

export type Element = {
  type: string;
  user_id?: string;
  text?: string;
};

export type MessageProps = {
  message: Message;
  say?: any;
};
