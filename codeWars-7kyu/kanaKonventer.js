// DESCRIPTION:
// Write a simple converter for vowels.
// 
//       Romaji:    a/A e/E i/I u/U o/O
//       Hiragana:  あ  え   い  う   お 
//       Katakana:  ア  エ   イ  ウ   オ
// Expect the above characters as input. There won't be invalid input.
// 
// Rules:
// 
// If there is no input return an empty string. 
// Do not change romaji. (a->a, A->A ... NOT A->a )
// Change Kana to lower case romaji. (あ->a ... NOT あ->A)
// Input can be mixed, but output should be consistent. (aAあア -> aAaa, for "romaji")
// Example 1:
// 
// Input: "aeiou" 
// Output:"hiragana"
// 
// Expected output: "あえいおう"
// Example 2:
// 
// Input: "AえイOう"
// Output:"romaji"
// 
// Expected output: "AeiOu"

const romajiDictLow = "aeiou";
const romajiDictUp  = "AEIOU";
const hiraDict      = "あえいおう";
const kataDict      = "アエイオウ";

function vowels(input, output) {
  if (output == "hiragana") {
    return [...input].map(c=>
      romajiDictLow.includes(c) ? hiraDict[romajiDictLow.indexOf(c)] :
      romajiDictUp.includes(c) ? hiraDict[romajiDictUp.indexOf(c)] :
      hiraDict.includes(c) ? hiraDict[hiraDict.indexOf(c)] :
      kataDict.includes(c) ? hiraDict[kataDict.indexOf(c)] : c
    ).join('');
  }
  if (output == "katakana") {
    return [...input].map(c=>
      romajiDictLow.includes(c) ? kataDict[romajiDictLow.indexOf(c)] :
      romajiDictUp.includes(c) ? kataDict[romajiDictUp.indexOf(c)] :
      hiraDict.includes(c) ? kataDict[hiraDict.indexOf(c)] :
      kataDict.includes(c) ? kataDict[kataDict.indexOf(c)] : c
    ).join('');
  }
  return [...input].map(c=>
    hiraDict.includes(c) ? romajiDictLow[hiraDict.indexOf(c)] :
    kataDict.includes(c) ? romajiDictLow[kataDict.indexOf(c)] : c
  ).join('');
}
