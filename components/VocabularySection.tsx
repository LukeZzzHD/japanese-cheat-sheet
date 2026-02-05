"use client";

import { useState } from "react";

import { useIsLargeScreen } from "@/hooks/useMediaQuery";

interface VocabWord {
  japanese: string;
  romaji: string;
  english: string;
  note?: string;
}

interface VocabCategory {
  id: string;
  title: string;
  titleJapanese: string;
  words: VocabWord[];
  subcategories?: {
    title: string;
    words: VocabWord[];
  }[];
}

const vocabularyData: VocabCategory[] = [
  {
    id: "numbers",
    title: "Numbers",
    titleJapanese: "かず",
    words: [
      { japanese: "いち", romaji: "ichi", english: "1" },
      { japanese: "に", romaji: "ni", english: "2" },
      { japanese: "さん", romaji: "san", english: "3" },
      { japanese: "よん / し", romaji: "yon / shi", english: "4" },
      { japanese: "ご", romaji: "go", english: "5" },
      { japanese: "ろく", romaji: "roku", english: "6" },
      { japanese: "なな / しち", romaji: "nana / shichi", english: "7" },
      { japanese: "はち", romaji: "hachi", english: "8" },
      { japanese: "きゅう / く", romaji: "kyuu / ku", english: "9" },
      { japanese: "じゅう", romaji: "juu", english: "10" },
    ],
    subcategories: [
      {
        title: "Tens (10-90)",
        words: [
          { japanese: "にじゅう", romaji: "nijuu", english: "20" },
          { japanese: "さんじゅう", romaji: "sanjuu", english: "30" },
          { japanese: "よんじゅう", romaji: "yonjuu", english: "40" },
          { japanese: "ごじゅう", romaji: "gojuu", english: "50" },
          { japanese: "ろくじゅう", romaji: "rokujuu", english: "60" },
          { japanese: "ななじゅう", romaji: "nanajuu", english: "70" },
          { japanese: "はちじゅう", romaji: "hachijuu", english: "80" },
          { japanese: "きゅうじゅう", romaji: "kyuujuu", english: "90" },
        ],
      },
      {
        title: "Hundreds (100-900)",
        words: [
          { japanese: "ひゃく", romaji: "hyaku", english: "100" },
          { japanese: "にひゃく", romaji: "nihyaku", english: "200" },
          {
            japanese: "さんびゃく",
            romaji: "sanbyaku",
            english: "300",
            note: "Sound change!",
          },
          { japanese: "よんひゃく", romaji: "yonhyaku", english: "400" },
          { japanese: "ごひゃく", romaji: "gohyaku", english: "500" },
          {
            japanese: "ろっぴゃく",
            romaji: "roppyaku",
            english: "600",
            note: "Sound change!",
          },
          { japanese: "ななひゃく", romaji: "nanahyaku", english: "700" },
          {
            japanese: "はっぴゃく",
            romaji: "happyaku",
            english: "800",
            note: "Sound change!",
          },
          { japanese: "きゅうひゃく", romaji: "kyuuhyaku", english: "900" },
        ],
      },
      {
        title: "Thousands",
        words: [
          { japanese: "せん", romaji: "sen", english: "1,000" },
          { japanese: "にせん", romaji: "nisen", english: "2,000" },
          {
            japanese: "さんぜん",
            romaji: "sanzen",
            english: "3,000",
            note: "Sound change!",
          },
          { japanese: "よんせん", romaji: "yonsen", english: "4,000" },
          { japanese: "ごせん", romaji: "gosen", english: "5,000" },
          { japanese: "ろくせん", romaji: "rokusen", english: "6,000" },
          { japanese: "ななせん", romaji: "nanasen", english: "7,000" },
          {
            japanese: "はっせん",
            romaji: "hassen",
            english: "8,000",
            note: "Sound change!",
          },
          { japanese: "きゅうせん", romaji: "kyuusen", english: "9,000" },
          { japanese: "いちまん", romaji: "ichiman", english: "10,000" },
        ],
      },
      {
        title: "Counting People",
        words: [
          {
            japanese: "ひとり",
            romaji: "hitori",
            english: "1 person",
            note: "Irregular",
          },
          {
            japanese: "ふたり",
            romaji: "futari",
            english: "2 people",
            note: "Irregular",
          },
          { japanese: "さんにん", romaji: "san-nin", english: "3 people" },
          { japanese: "よにん", romaji: "yo-nin", english: "4 people" },
          { japanese: "ごにん", romaji: "go-nin", english: "5 people" },
          { japanese: "ろくにん", romaji: "roku-nin", english: "6 people" },
          { japanese: "ななにん", romaji: "nana-nin", english: "7 people" },
        ],
      },
      {
        title: "Counting Items",
        words: [
          { japanese: "ひとつ", romaji: "hitotsu", english: "1 thing" },
          { japanese: "ふたつ", romaji: "futatsu", english: "2 things" },
          { japanese: "みっつ", romaji: "mittsu", english: "3 things" },
          { japanese: "よっつ", romaji: "yottsu", english: "4 things" },
          { japanese: "いつつ", romaji: "itsutsu", english: "5 things" },
          { japanese: "むっつ", romaji: "muttsu", english: "6 things" },
          { japanese: "ななつ", romaji: "nanatsu", english: "7 things" },
          { japanese: "やっつ", romaji: "yattsu", english: "8 things" },
          { japanese: "ここのつ", romaji: "kokonotsu", english: "9 things" },
          { japanese: "とお", romaji: "too", english: "10 things" },
        ],
      },
    ],
  },
  {
    id: "time",
    title: "Time",
    titleJapanese: "じかん",
    words: [
      { japanese: "いちじ", romaji: "ichi-ji", english: "1:00" },
      { japanese: "にじ", romaji: "ni-ji", english: "2:00" },
      { japanese: "さんじ", romaji: "san-ji", english: "3:00" },
      { japanese: "よじ", romaji: "yo-ji", english: "4:00" },
      { japanese: "ごじ", romaji: "go-ji", english: "5:00" },
      { japanese: "ろくじ", romaji: "roku-ji", english: "6:00" },
      { japanese: "しちじ", romaji: "shichi-ji", english: "7:00" },
      { japanese: "はちじ", romaji: "hachi-ji", english: "8:00" },
      { japanese: "くじ", romaji: "ku-ji", english: "9:00" },
      { japanese: "じゅうじ", romaji: "juu-ji", english: "10:00" },
      { japanese: "じゅういちじ", romaji: "juuichi-ji", english: "11:00" },
      { japanese: "じゅうにじ", romaji: "juuni-ji", english: "12:00" },
    ],
    subcategories: [
      {
        title: "Time Words",
        words: [
          { japanese: "〜じ", romaji: "~ji", english: "o'clock" },
          {
            japanese: "〜ふん / 〜ぷん",
            romaji: "~fun / ~pun",
            english: "minute(s)",
          },
          { japanese: "〜はん", romaji: "~han", english: "half past" },
          { japanese: "〜ごろ", romaji: "~goro", english: "around (time)" },
          { japanese: "なんじ", romaji: "nanji", english: "what time?" },
          { japanese: "いつ", romaji: "itsu", english: "when?" },
        ],
      },
      {
        title: "Time of Day",
        words: [
          { japanese: "あさ", romaji: "asa", english: "morning" },
          { japanese: "ひる", romaji: "hiru", english: "noon/daytime" },
          { japanese: "よる", romaji: "yoru", english: "night" },
          { japanese: "ごぜん", romaji: "gozen", english: "AM" },
          { japanese: "ごご", romaji: "gogo", english: "PM" },
        ],
      },
      {
        title: "Days of the Week",
        words: [
          { japanese: "げつようび", romaji: "getsuyoubi", english: "Monday" },
          { japanese: "かようび", romaji: "kayoubi", english: "Tuesday" },
          { japanese: "すいようび", romaji: "suiyoubi", english: "Wednesday" },
          { japanese: "もくようび", romaji: "mokuyoubi", english: "Thursday" },
          { japanese: "きんようび", romaji: "kinyoubi", english: "Friday" },
          { japanese: "どようび", romaji: "doyoubi", english: "Saturday" },
          { japanese: "にちようび", romaji: "nichiyoubi", english: "Sunday" },
          { japanese: "なんようび", romaji: "nan'youbi", english: "what day?" },
        ],
      },
      {
        title: "Months",
        words: [
          { japanese: "いちがつ", romaji: "ichigatsu", english: "January" },
          { japanese: "にがつ", romaji: "nigatsu", english: "February" },
          { japanese: "さんがつ", romaji: "sangatsu", english: "March" },
          { japanese: "しがつ", romaji: "shigatsu", english: "April" },
          { japanese: "ごがつ", romaji: "gogatsu", english: "May" },
          { japanese: "ろくがつ", romaji: "rokugatsu", english: "June" },
          { japanese: "しちがつ", romaji: "shichigatsu", english: "July" },
          { japanese: "はちがつ", romaji: "hachigatsu", english: "August" },
          { japanese: "くがつ", romaji: "kugatsu", english: "September" },
          { japanese: "じゅうがつ", romaji: "juugatsu", english: "October" },
          {
            japanese: "じゅういちがつ",
            romaji: "juuichigatsu",
            english: "November",
          },
          {
            japanese: "じゅうにがつ",
            romaji: "juunigatsu",
            english: "December",
          },
        ],
      },
      {
        title: "Relative Days",
        words: [
          {
            japanese: "おととい",
            romaji: "ototoi",
            english: "day before yesterday",
          },
          { japanese: "きのう", romaji: "kinou", english: "yesterday" },
          { japanese: "きょう", romaji: "kyou", english: "today" },
          { japanese: "あした", romaji: "ashita", english: "tomorrow" },
          {
            japanese: "あさって",
            romaji: "asatte",
            english: "day after tomorrow",
          },
        ],
      },
      {
        title: "Relative Weeks/Months/Years",
        words: [
          { japanese: "せんしゅう", romaji: "senshuu", english: "last week" },
          { japanese: "こんしゅう", romaji: "konshuu", english: "this week" },
          { japanese: "らいしゅう", romaji: "raishuu", english: "next week" },
          { japanese: "せんげつ", romaji: "sengetsu", english: "last month" },
          { japanese: "こんげつ", romaji: "kongetsu", english: "this month" },
          { japanese: "らいげつ", romaji: "raigetsu", english: "next month" },
          { japanese: "きょねん", romaji: "kyonen", english: "last year" },
          { japanese: "ことし", romaji: "kotoshi", english: "this year" },
          { japanese: "らいねん", romaji: "rainen", english: "next year" },
        ],
      },
      {
        title: "Seasons",
        words: [
          { japanese: "はる", romaji: "haru", english: "spring" },
          { japanese: "なつ", romaji: "natsu", english: "summer" },
          { japanese: "あき", romaji: "aki", english: "autumn" },
          { japanese: "ふゆ", romaji: "fuyu", english: "winter" },
        ],
      },
    ],
  },
  {
    id: "food",
    title: "Food & Drinks",
    titleJapanese: "たべもの・のみもの",
    words: [
      { japanese: "ごはん", romaji: "gohan", english: "rice/meal" },
      { japanese: "やさい", romaji: "yasai", english: "vegetables" },
      { japanese: "にく", romaji: "niku", english: "meat" },
      { japanese: "さかな", romaji: "sakana", english: "fish" },
      { japanese: "たまご", romaji: "tamago", english: "egg" },
      { japanese: "くだもの", romaji: "kudamono", english: "fruit" },
      { japanese: "パン", romaji: "pan", english: "bread" },
    ],
    subcategories: [
      {
        title: "Japanese Dishes",
        words: [
          { japanese: "みそしる", romaji: "misoshiru", english: "miso soup" },
          { japanese: "ラーメン", romaji: "raamen", english: "ramen" },
          { japanese: "そば", romaji: "soba", english: "soba noodles" },
          { japanese: "うどん", romaji: "udon", english: "udon noodles" },
          { japanese: "すし", romaji: "sushi", english: "sushi" },
          { japanese: "カレー", romaji: "karee", english: "curry" },
          {
            japanese: "ハンバーガー",
            romaji: "hanbaagaa",
            english: "hamburger",
          },
        ],
      },
      {
        title: "Meals",
        words: [
          { japanese: "あさごはん", romaji: "asagohan", english: "breakfast" },
          { japanese: "ひるごはん", romaji: "hirugohan", english: "lunch" },
          { japanese: "ばんごはん", romaji: "bangohan", english: "dinner" },
          { japanese: "おかし", romaji: "okashi", english: "sweets/snacks" },
        ],
      },
      {
        title: "Drinks",
        words: [
          { japanese: "みず", romaji: "mizu", english: "water" },
          { japanese: "おちゃ", romaji: "ocha", english: "tea" },
          { japanese: "コーヒー", romaji: "koohii", english: "coffee" },
          { japanese: "ジュース", romaji: "juusu", english: "juice" },
          { japanese: "ビール", romaji: "biiru", english: "beer" },
          { japanese: "ぎゅうにゅう", romaji: "gyuunyuu", english: "milk" },
        ],
      },
    ],
  },
  {
    id: "family",
    title: "Family",
    titleJapanese: "かぞく",
    words: [{ japanese: "かぞく", romaji: "kazoku", english: "family" }],
    subcategories: [
      {
        title: "Own Family (Humble)",
        words: [
          { japanese: "ちち", romaji: "chichi", english: "(my) father" },
          { japanese: "はは", romaji: "haha", english: "(my) mother" },
          { japanese: "あに", romaji: "ani", english: "(my) older brother" },
          { japanese: "あね", romaji: "ane", english: "(my) older sister" },
          {
            japanese: "おとうと",
            romaji: "otouto",
            english: "(my) younger brother",
          },
          {
            japanese: "いもうと",
            romaji: "imouto",
            english: "(my) younger sister",
          },
          { japanese: "おっと", romaji: "otto", english: "(my) husband" },
          { japanese: "つま", romaji: "tsuma", english: "(my) wife" },
          { japanese: "こども", romaji: "kodomo", english: "child/children" },
        ],
      },
      {
        title: "Others' Family (Polite)",
        words: [
          {
            japanese: "おとうさん",
            romaji: "otousan",
            english: "(your) father",
          },
          {
            japanese: "おかあさん",
            romaji: "okaasan",
            english: "(your) mother",
          },
          {
            japanese: "おにいさん",
            romaji: "oniisan",
            english: "(your) older brother",
          },
          {
            japanese: "おねえさん",
            romaji: "oneesan",
            english: "(your) older sister",
          },
          {
            japanese: "おとうとさん",
            romaji: "otoutosan",
            english: "(your) younger brother",
          },
          {
            japanese: "いもうとさん",
            romaji: "imoutosan",
            english: "(your) younger sister",
          },
          { japanese: "おじいさん", romaji: "ojiisan", english: "grandfather" },
          { japanese: "おばあさん", romaji: "obaasan", english: "grandmother" },
        ],
      },
    ],
  },
  {
    id: "occupations",
    title: "Occupations",
    titleJapanese: "しごと",
    words: [
      { japanese: "しごと", romaji: "shigoto", english: "job/work" },
      { japanese: "きょうし", romaji: "kyoushi", english: "teacher" },
      { japanese: "がくせい", romaji: "gakusei", english: "student" },
      {
        japanese: "かいしゃいん",
        romaji: "kaishain",
        english: "company employee",
      },
      { japanese: "こうむいん", romaji: "koumuin", english: "civil servant" },
      { japanese: "エンジニア", romaji: "enjinia", english: "engineer" },
      {
        japanese: "しゅふ",
        romaji: "shufu",
        english: "housewife/househusband",
      },
      { japanese: "アルバイト", romaji: "arubaito", english: "part-time job" },
      { japanese: "めいし", romaji: "meishi", english: "business card" },
    ],
  },
  {
    id: "places",
    title: "Places",
    titleJapanese: "ばしょ",
    words: [
      { japanese: "うち", romaji: "uchi", english: "home/house" },
      { japanese: "がっこう", romaji: "gakkou", english: "school" },
      { japanese: "びょういん", romaji: "byouin", english: "hospital" },
      { japanese: "みせ", romaji: "mise", english: "shop/store" },
      { japanese: "レストラン", romaji: "resutoran", english: "restaurant" },
      { japanese: "カラオケ", romaji: "karaoke", english: "karaoke" },
      { japanese: "コンサート", romaji: "konsaato", english: "concert" },
      { japanese: "えき", romaji: "eki", english: "station" },
    ],
    subcategories: [
      {
        title: "Position Words",
        words: [
          { japanese: "うえ", romaji: "ue", english: "up/above" },
          { japanese: "した", romaji: "shita", english: "down/below" },
          { japanese: "ひだり", romaji: "hidari", english: "left" },
          { japanese: "みぎ", romaji: "migi", english: "right" },
          { japanese: "まえ", romaji: "mae", english: "front" },
          { japanese: "うしろ", romaji: "ushiro", english: "behind" },
          { japanese: "ちかく", romaji: "chikaku", english: "near" },
          { japanese: "となり", romaji: "tonari", english: "next to" },
          { japanese: "そと", romaji: "soto", english: "outside" },
          { japanese: "なか", romaji: "naka", english: "inside" },
          { japanese: "よこ", romaji: "yoko", english: "beside" },
        ],
      },
    ],
  },
  {
    id: "hobbies",
    title: "Hobbies & Sports",
    titleJapanese: "しゅみ・スポーツ",
    words: [
      { japanese: "しゅみ", romaji: "shumi", english: "hobby" },
      { japanese: "えいが", romaji: "eiga", english: "movies" },
      { japanese: "おんがく", romaji: "ongaku", english: "music" },
      { japanese: "りょこう", romaji: "ryokou", english: "travel" },
      { japanese: "どくしょ", romaji: "dokusho", english: "reading" },
      { japanese: "しゃしん", romaji: "shashin", english: "photography" },
    ],
    subcategories: [
      {
        title: "Sports",
        words: [
          { japanese: "スポーツ", romaji: "supootsu", english: "sports" },
          { japanese: "サッカー", romaji: "sakkaa", english: "soccer" },
          { japanese: "やきゅう", romaji: "yakyuu", english: "baseball" },
          { japanese: "テニス", romaji: "tenisu", english: "tennis" },
          { japanese: "ヨガ", romaji: "yoga", english: "yoga" },
        ],
      },
      {
        title: "Music",
        words: [
          { japanese: "ピアノ", romaji: "piano", english: "piano" },
          { japanese: "ギター", romaji: "gitaa", english: "guitar" },
          { japanese: "ロック", romaji: "rokku", english: "rock" },
          {
            japanese: "クラシック",
            romaji: "kurashikku",
            english: "classical",
          },
          { japanese: "ジャズ", romaji: "jazu", english: "jazz" },
          { japanese: "アニメ", romaji: "anime", english: "anime" },
        ],
      },
      {
        title: "Traditional Culture",
        words: [
          {
            japanese: "いけばな",
            romaji: "ikebana",
            english: "flower arrangement",
          },
          { japanese: "さどう", romaji: "sadou", english: "tea ceremony" },
          { japanese: "ぼんさい", romaji: "bonsai", english: "bonsai" },
          { japanese: "おりがみ", romaji: "origami", english: "origami" },
          { japanese: "はいく", romaji: "haiku", english: "haiku poetry" },
          { japanese: "かぶき", romaji: "kabuki", english: "kabuki theater" },
        ],
      },
    ],
  },
  {
    id: "adjectives",
    title: "Adjectives",
    titleJapanese: "けいようし",
    words: [],
    subcategories: [
      {
        title: "い-Adjectives (Basic)",
        words: [
          {
            japanese: "おいしい",
            romaji: "oishii",
            english: "delicious",
            note: "→ おいしくない",
          },
          {
            japanese: "おおきい",
            romaji: "ookii",
            english: "big",
            note: "→ おおきくない",
          },
          {
            japanese: "ちいさい",
            romaji: "chiisai",
            english: "small",
            note: "→ ちいさくない",
          },
          {
            japanese: "あつい",
            romaji: "atsui",
            english: "hot (weather)",
            note: "→ あつくない",
          },
          {
            japanese: "さむい",
            romaji: "samui",
            english: "cold (weather)",
            note: "→ さむくない",
          },
          {
            japanese: "いそがしい",
            romaji: "isogashii",
            english: "busy",
            note: "→ いそがしくない",
          },
          {
            japanese: "おもしろい",
            romaji: "omoshiroi",
            english: "interesting",
            note: "→ おもしろくない",
          },
        ],
      },
      {
        title: "い-Adjectives (Feelings)",
        words: [
          {
            japanese: "うれしい",
            romaji: "ureshii",
            english: "happy",
            note: "→ うれしくない",
          },
          {
            japanese: "かなしい",
            romaji: "kanashii",
            english: "sad",
            note: "→ かなしくない",
          },
          {
            japanese: "やさしい",
            romaji: "yasashii",
            english: "kind",
            note: "→ やさしくない",
          },
          {
            japanese: "きびしい",
            romaji: "kibishii",
            english: "strict",
            note: "→ きびしくない",
          },
          {
            japanese: "かっこいい",
            romaji: "kakkoii",
            english: "cool",
            note: "→ かっこよくない",
          },
          {
            japanese: "かわいい",
            romaji: "kawaii",
            english: "cute",
            note: "→ かわいくない",
          },
        ],
      },
      {
        title: "い-Adjectives (Price/Speed/Taste)",
        words: [
          {
            japanese: "たかい",
            romaji: "takai",
            english: "expensive/tall",
            note: "→ たかくない",
          },
          {
            japanese: "やすい",
            romaji: "yasui",
            english: "cheap",
            note: "→ やすくない",
          },
          {
            japanese: "はやい",
            romaji: "hayai",
            english: "fast/early",
            note: "→ はやくない",
          },
          {
            japanese: "おそい",
            romaji: "osoi",
            english: "slow/late",
            note: "→ おそくない",
          },
          {
            japanese: "からい",
            romaji: "karai",
            english: "spicy",
            note: "→ からくない",
          },
          {
            japanese: "あまい",
            romaji: "amai",
            english: "sweet",
            note: "→ あまくない",
          },
          {
            japanese: "すっぱい",
            romaji: "suppai",
            english: "sour",
            note: "→ すっぱくない",
          },
          {
            japanese: "つめたい",
            romaji: "tsumetai",
            english: "cold (touch)",
            note: "→ つめたくない",
          },
          {
            japanese: "あたたかい",
            romaji: "atatakai",
            english: "warm",
            note: "→ あたたかくない",
          },
        ],
      },
      {
        title: "Irregular い-Adjective",
        words: [
          {
            japanese: "いい / よい",
            romaji: "ii / yoi",
            english: "good",
            note: "→ よくない (Irregular!)",
          },
          {
            japanese: "わるい",
            romaji: "warui",
            english: "bad",
            note: "→ わるくない",
          },
        ],
      },
      {
        title: "な-Adjectives",
        words: [
          { japanese: "すき(な)", romaji: "suki (na)", english: "like" },
          { japanese: "きらい(な)", romaji: "kirai (na)", english: "dislike" },
          { japanese: "ひま(な)", romaji: "hima (na)", english: "free (time)" },
          {
            japanese: "おしゃれ(な)",
            romaji: "oshare (na)",
            english: "fashionable",
          },
          { japanese: "すてき(な)", romaji: "suteki (na)", english: "lovely" },
          { japanese: "まあまあ(な)", romaji: "maamaa (na)", english: "so-so" },
        ],
      },
    ],
  },
  {
    id: "verbs",
    title: "Common Verbs",
    titleJapanese: "どうし",
    words: [
      { japanese: "たべます", romaji: "tabemasu", english: "eat" },
      { japanese: "のみます", romaji: "nomimasu", english: "drink" },
      { japanese: "いきます", romaji: "ikimasu", english: "go" },
      { japanese: "きます", romaji: "kimasu", english: "come" },
      { japanese: "かえります", romaji: "kaerimasu", english: "return home" },
      { japanese: "みます", romaji: "mimasu", english: "watch/see" },
      { japanese: "ききます", romaji: "kikimasu", english: "listen" },
      { japanese: "よみます", romaji: "yomimasu", english: "read" },
      { japanese: "かきます", romaji: "kakimasu", english: "write" },
      { japanese: "します", romaji: "shimasu", english: "do" },
    ],
    subcategories: [
      {
        title: "Daily Routine",
        words: [
          { japanese: "おきます", romaji: "okimasu", english: "wake up" },
          { japanese: "ねます", romaji: "nemasu", english: "sleep" },
          {
            japanese: "おふろに はいります",
            romaji: "ofuro ni hairimasu",
            english: "take a bath",
          },
          {
            japanese: "シャワーを あびます",
            romaji: "shawaa o abimasu",
            english: "take a shower",
          },
          {
            japanese: "はを みがきます",
            romaji: "ha o migakimasu",
            english: "brush teeth",
          },
          {
            japanese: "かおを あらいます",
            romaji: "kao o araimasu",
            english: "wash face",
          },
        ],
      },
      {
        title: "Activities (~を します)",
        words: [
          {
            japanese: "べんきょう(を)します",
            romaji: "benkyou o shimasu",
            english: "study",
          },
          {
            japanese: "しごと(を)します",
            romaji: "shigoto o shimasu",
            english: "work",
          },
          {
            japanese: "うんどう(を)します",
            romaji: "undou o shimasu",
            english: "exercise",
          },
          {
            japanese: "りょうり(を)します",
            romaji: "ryouri o shimasu",
            english: "cook",
          },
          {
            japanese: "せんたく(を)します",
            romaji: "sentaku o shimasu",
            english: "do laundry",
          },
          {
            japanese: "そうじ(を)します",
            romaji: "souji o shimasu",
            english: "clean",
          },
          {
            japanese: "かいもの(を)します",
            romaji: "kaimono o shimasu",
            english: "go shopping",
          },
        ],
      },
      {
        title: "Other Verbs",
        words: [
          { japanese: "かいます", romaji: "kaimasu", english: "buy" },
          { japanese: "あいます", romaji: "aimasu", english: "meet" },
          { japanese: "あそびます", romaji: "asobimasu", english: "play" },
          { japanese: "およぎます", romaji: "oyogimasu", english: "swim" },
          { japanese: "うたいます", romaji: "utaimasu", english: "sing" },
          { japanese: "おどります", romaji: "odorimasu", english: "dance" },
          {
            japanese: "わかります",
            romaji: "wakarimasu",
            english: "understand",
          },
          { japanese: "おしえます", romaji: "oshiemasu", english: "teach" },
        ],
      },
    ],
  },
  {
    id: "frequency",
    title: "Frequency & Quantity",
    titleJapanese: "ひんど",
    words: [
      { japanese: "いつも", romaji: "itsumo", english: "always" },
      { japanese: "よく", romaji: "yoku", english: "often" },
      { japanese: "ときどき", romaji: "tokidoki", english: "sometimes" },
      {
        japanese: "あまり",
        romaji: "amari",
        english: "not much",
        note: "Use with negative!",
      },
      {
        japanese: "ぜんぜん",
        romaji: "zenzen",
        english: "not at all",
        note: "Use with negative!",
      },
      { japanese: "まいにち", romaji: "mainichi", english: "every day" },
      { japanese: "まいしゅう", romaji: "maishuu", english: "every week" },
      { japanese: "まいつき", romaji: "maitsuki", english: "every month" },
    ],
    subcategories: [
      {
        title: "Quantity",
        words: [
          { japanese: "たくさん", romaji: "takusan", english: "many/much" },
          { japanese: "すこし", romaji: "sukoshi", english: "a little" },
          { japanese: "ちょっと", romaji: "chotto", english: "a bit" },
        ],
      },
    ],
  },
  {
    id: "countries",
    title: "Countries & Languages",
    titleJapanese: "くに・ことば",
    words: [
      { japanese: "にほん", romaji: "nihon", english: "Japan" },
      {
        japanese: "にほんご",
        romaji: "nihongo",
        english: "Japanese (language)",
      },
      { japanese: "ちゅうごく", romaji: "chuugoku", english: "China" },
      {
        japanese: "ちゅうごくご",
        romaji: "chuugokugo",
        english: "Chinese (language)",
      },
      { japanese: "かんこく", romaji: "kankoku", english: "Korea" },
      {
        japanese: "かんこくご",
        romaji: "kankokugo",
        english: "Korean (language)",
      },
      { japanese: "アメリカ", romaji: "amerika", english: "America" },
      { japanese: "えいご", romaji: "eigo", english: "English (language)" },
    ],
  },
];

interface AccordionSectionProps {
  title: string;
  subtitle: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function AccordionSection({
  title,
  subtitle,
  isOpen,
  onToggle,
  children,
}: AccordionSectionProps) {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-700">
      <div
        className="sticky z-20 bg-white dark:bg-zinc-900"
        style={{ top: 'calc(var(--navbar-height) + var(--section-header-height))' }}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between py-3 text-left"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              {title}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {subtitle}
            </span>
          </div>
          <svg
            className={`h-5 w-5 text-zinc-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
}

function VocabCard({ word }: { word: VocabWord }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-200 px-3 py-2 dark:border-zinc-700">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">
            {word.japanese}
          </span>
          {word.note && (
            <span className="shrink-0 rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
              {word.note}
            </span>
          )}
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {word.romaji}
        </p>
      </div>
      <span className="ml-2 shrink-0 text-sm text-zinc-600 dark:text-zinc-300">
        {word.english}
      </span>
    </div>
  );
}

function SubcategorySection({
  title,
  words,
}: {
  title: string;
  words: VocabWord[];
}) {
  return (
    <div className="mt-3">
      <div
        className="sticky z-10 bg-white py-2 dark:bg-zinc-900"
        style={{ top: 'calc(var(--navbar-height) + var(--section-header-height) + var(--subsection-header-height))' }}
      >
        <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {title}
        </h4>
      </div>
      <div className="grid gap-2 lg:grid-cols-2">
        {words.map((word, index) => (
          <VocabCard key={index} word={word} />
        ))}
      </div>
    </div>
  );
}

export function VocabularySection() {
  const isLargeScreen = useIsLargeScreen();
  const [manualOverrides, setManualOverrides] = useState<
    Record<string, boolean>
  >({});

  const defaultState: Record<string, boolean> = {};
  vocabularyData.forEach((category) => {
    defaultState[category.id] = isLargeScreen
      ? true
      : category.id === "numbers";
  });

  const openSections = { ...defaultState, ...manualOverrides };

  const toggleSection = (section: string) => {
    setManualOverrides((prev) => ({
      ...prev,
      [section]: !openSections[section],
    }));
  };

  return (
    <div className="rounded-xl bg-white shadow-sm dark:bg-zinc-900">
      <div
        className="sticky z-30 rounded-t-xl bg-white px-4 pt-4 dark:bg-zinc-900"
        style={{ top: 'var(--navbar-height)' }}
      >
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          たんご (Vocabulary)
        </h2>
        <p className="pb-2 text-sm text-zinc-600 dark:text-zinc-400">
          Essential vocabulary organized by category. Tap to expand each section.
        </p>
      </div>
      <div className="px-4 pb-4">
        {vocabularyData.map((category) => (
          <AccordionSection
            key={category.id}
            title={category.title}
            subtitle={`(${category.titleJapanese})`}
            isOpen={openSections[category.id] || false}
            onToggle={() => toggleSection(category.id)}
          >
            {category.words.length > 0 && (
              <div className="grid gap-2 lg:grid-cols-2">
                {category.words.map((word, index) => (
                  <VocabCard key={index} word={word} />
                ))}
              </div>
            )}

            {category.subcategories?.map((sub, index) => (
              <SubcategorySection
                key={index}
                title={sub.title}
                words={sub.words}
              />
            ))}
          </AccordionSection>
        ))}
      </div>
    </div>
  );
}
