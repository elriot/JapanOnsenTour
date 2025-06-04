import JapanesePhraseTable from "../../components/JapanesePhraseTable";
import Section from "../../components/Section";

function TravelExtrasJapanese( { className = "" }) {
	return (
		<Section className={className} paddingBottom="false" paddingTop="true">
			<JapanesePhraseTable
				intro="When travelling to any new country, foreign languages can be intimidating. Here are some common Japanese phrases that will help you on your travel:"
				phrases={phraseData1} 
				className="page-content-text"
			/>
			<JapanesePhraseTable 
				intro="Here are some useful phrases to help you during your onsen stay:"
				phrases={phraseData2} 
				className="pb-10"
			/>
		</Section>
	)
}

const phraseData1 = [
  { english: "Excuse me", romaji: "Sumimasen", japanese: "すみません。" },
  { english: "I do not understand", romaji: "Wakarimasen", japanese: "わかりません。" },
  { english: "Where is...?", romaji: "...wa doko desu ka?", japanese: "〜はどこですか？" },
  { english: "Thank you", romaji: "Arigato gozaimasu", japanese: "ありがとうございます。" },
  { english: "Hello", romaji: "Konnichiwa", japanese: "こんにちは。" },
  { english: "Please", romaji: "Onegaishimasu", japanese: "お願いします。" },
  { english: "Yes", romaji: "Hai", japanese: "はい。" },
  { english: "No", romaji: "Iie", japanese: "いいえ。" },
  { english: "Goodbye", romaji: "Sayounara, Bye bye", japanese: "さようなら, バイバイ" },
  { english: "Ticket", romaji: "Kippu", japanese: "切符" },
  { english: "Bullet train", romaji: "Shinkansen", japanese: "新幹線" },
];

const phraseData2 = [
  { english: "How much for one person?", romaji: "Hitori ikura desu ka?", japanese: "一人いくらですか？" },
  { english: "Are tattoos allowed?", romaji: "Tatu wa kyouka sarete masu ka?", japanese: "タトゥーは許可されていますか？" },
  { english: "Is this available?", romaji: "Koko wa riyou kanou ka?", japanese: "これは利用可能ですか？" },
  { english: "Where's the women's bath?", romaji: "Jyoseiyouno ohuro wa doko desu ka?", japanese: "女性用のお風呂はどこですか？" },
  { english: "Where’s the men's bath?", romaji: "Otoko-yu wa doko desu ka?", japanese: "男湯はどこですか？" },
  { english: "Can I use this?", romaji: "Korewo tsukattemo ii desu ka?", japanese: "これを使ってもいいですか？" },
  { english: "Is there a lounge?", romaji: "launji wa arimasu ka?", japanese: "ラウンジはありますか？" },
  { english: "I don't feel well.", romaji: "Gu-ai ga yoku arimasen", japanese: "具合がよくありません。" },
  { english: "I feel dizzy.", romaji: "Memai ga simasu.", japanese: "眩暈がします。"  }
];

export default TravelExtrasJapanese;