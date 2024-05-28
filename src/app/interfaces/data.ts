export interface AppData {
  created_at: number;
  updated_at: number;
  _cls: string;
  email_hash: string;
  year: number;
  data_upload_status: string;
  results: {
    number_of_swipes: number;
    number_of_likes: number;
    number_of_no_likes: number;
    number_of_matches: number;
    number_of_no_matches: number;
    match_ratio: number;
    number_messages_sent: number;
    number_messages_received: number;
    number_of_no_conversations: number;
    number_of_dates: number;
    number_of_no_dates: number;
    number_of_sex: number;
    number_of_no_spark: number;
    number_of_relationships: number;
    longest_conversation: number;
    number_of_conversations: number;
    app_opens: {
      monday: Record<string, number>;
      tuesday: Record<string, number>;
      wednesday: Record<string, number>;
      thursday: Record<string, number>;
      friday: Record<string, number>;
      saturday: Record<string, number>;
      sunday: Record<string, number>;
    };
    number_of_superlikes: number;
    number_of_messages_sent: number;
    number_of_messages_received: number;
  };
  status: string;
  id: string;
}
