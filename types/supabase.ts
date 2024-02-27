export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      channel: {
        Row: {
          createdat: string | null
          id: string
          name: string | null
          profileid: string | null
          serverid: string | null
          type: string | null
          updatedat: string | null
        }
        Insert: {
          createdat?: string | null
          id?: string
          name?: string | null
          profileid?: string | null
          serverid?: string | null
          type?: string | null
          updatedat?: string | null
        }
        Update: {
          createdat?: string | null
          id?: string
          name?: string | null
          profileid?: string | null
          serverid?: string | null
          type?: string | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "channel_profileid_fkey"
            columns: ["profileid"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "channel_serverid_fkey"
            columns: ["serverid"]
            isOneToOne: false
            referencedRelation: "server"
            referencedColumns: ["id"]
          }
        ]
      }
      conversation: {
        Row: {
          id: string
          memberoneid: string | null
          membertwoid: string | null
        }
        Insert: {
          id?: string
          memberoneid?: string | null
          membertwoid?: string | null
        }
        Update: {
          id?: string
          memberoneid?: string | null
          membertwoid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversation_memberoneid_fkey"
            columns: ["memberoneid"]
            isOneToOne: false
            referencedRelation: "member"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_membertwoid_fkey"
            columns: ["membertwoid"]
            isOneToOne: false
            referencedRelation: "member"
            referencedColumns: ["id"]
          }
        ]
      }
      directmessage: {
        Row: {
          content: string | null
          conversationid: string | null
          createdat: string | null
          deleted: boolean | null
          fileurl: string | null
          id: string
          memberid: string | null
          updatedat: string | null
        }
        Insert: {
          content?: string | null
          conversationid?: string | null
          createdat?: string | null
          deleted?: boolean | null
          fileurl?: string | null
          id?: string
          memberid?: string | null
          updatedat?: string | null
        }
        Update: {
          content?: string | null
          conversationid?: string | null
          createdat?: string | null
          deleted?: boolean | null
          fileurl?: string | null
          id?: string
          memberid?: string | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directmessage_conversationid_fkey"
            columns: ["conversationid"]
            isOneToOne: false
            referencedRelation: "conversation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directmessage_memberid_fkey"
            columns: ["memberid"]
            isOneToOne: false
            referencedRelation: "member"
            referencedColumns: ["id"]
          }
        ]
      }
      member: {
        Row: {
          createdat: string | null
          id: string
          profileid: string | null
          role: string | null
          serverid: string | null
          updatedat: string | null
        }
        Insert: {
          createdat?: string | null
          id?: string
          profileid?: string | null
          role?: string | null
          serverid?: string | null
          updatedat?: string | null
        }
        Update: {
          createdat?: string | null
          id?: string
          profileid?: string | null
          role?: string | null
          serverid?: string | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "member_profileid_fkey"
            columns: ["profileid"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "member_serverid_fkey"
            columns: ["serverid"]
            isOneToOne: false
            referencedRelation: "server"
            referencedColumns: ["id"]
          }
        ]
      }
      message: {
        Row: {
          channelid: string | null
          content: string | null
          createdat: string | null
          deleted: boolean | null
          fileurl: string | null
          id: string
          memberid: string | null
          updatedat: string | null
        }
        Insert: {
          channelid?: string | null
          content?: string | null
          createdat?: string | null
          deleted?: boolean | null
          fileurl?: string | null
          id?: string
          memberid?: string | null
          updatedat?: string | null
        }
        Update: {
          channelid?: string | null
          content?: string | null
          createdat?: string | null
          deleted?: boolean | null
          fileurl?: string | null
          id?: string
          memberid?: string | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_channelid_fkey"
            columns: ["channelid"]
            isOneToOne: false
            referencedRelation: "channel"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_memberid_fkey"
            columns: ["memberid"]
            isOneToOne: false
            referencedRelation: "member"
            referencedColumns: ["id"]
          }
        ]
      }
      profile: {
        Row: {
          createdat: string | null
          email: string | null
          id: string
          imageurl: string | null
          name: string | null
          updatedat: string | null
          userid: string | null
        }
        Insert: {
          createdat?: string | null
          email?: string | null
          id?: string
          imageurl?: string | null
          name?: string | null
          updatedat?: string | null
          userid?: string | null
        }
        Update: {
          createdat?: string | null
          email?: string | null
          id?: string
          imageurl?: string | null
          name?: string | null
          updatedat?: string | null
          userid?: string | null
        }
        Relationships: []
      }
      server: {
        Row: {
          createdat: string | null
          id: string
          imageurl: string | null
          invitecode: string | null
          name: string | null
          profileid: string | null
          updatedat: string | null
        }
        Insert: {
          createdat?: string | null
          id?: string
          imageurl?: string | null
          invitecode?: string | null
          name?: string | null
          profileid?: string | null
          updatedat?: string | null
        }
        Update: {
          createdat?: string | null
          id?: string
          imageurl?: string | null
          invitecode?: string | null
          name?: string | null
          profileid?: string | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "server_profileid_fkey"
            columns: ["profileid"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
