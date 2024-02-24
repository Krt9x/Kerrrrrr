# SoraWebui
सोरा वेब यूआई एक ओपन-सोर्स परियोजना है जो ऑनलाइन पाठ का उपयोग करके उपयोगकर्ताओं को वीडियो बनाने की प्रक्रिया को सरल बनाता है, जिसमें ओपनएआई के सोरा मॉडल का उपयोग करके वीडियो उत्पन्न किया जा सकता है, जो पाठ का उपयोग करते हैं, जिसमें आसान एक-क्लिक वेबसाइट डिप्लॉयमेंट शामिल है।👉 [SoraWebui](https://sorawebui.com)

[English](https://github.com/eltociear/SoraWebui/blob/main/README.md) | [简体中文](https://github.com/SoraWebui/SoraWebui/blob/main/README.zh-CN.md) | हिंदी


# परियोजना योजना
- ✅ शब्दों से वीडियो उत्पन्न करें ([FakeSoraAPI](https://github.com/SoraWebui/FakeSoraAPI) का उपयोग करें):
 आप main branch या टैग version-0.1 में इस सुविधा को देख सकते हैं।

- [ ] गूगल के साथ लॉगिन:

  जल्द ही आ रहा है

- [ ] स्ट्राइप भुगतान:

  जल्द ही आ रहा है

- [ ] ओपनएआई का सोरा एपीआई जोड़ें:

  ओपनएआई ने सोरा का एपीआई लॉन्च करने का इंतजार किया है, फिर हम इस सुविधा को लॉन्च करेंगे।


## तेज़ आरंभ करें:

### वर्सेल पर डिप्लॉय करें
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSoraWebui%2FSoraWebui&project-name=SoraWebui&repository-name=SoraWebui&external-id=https%3A%2F%2Fgithub.com%2FSoraWebui%2FSoraWebui%2Ftree%2Fmain)

### 1.परियोजना क्लोन करें

```bash
git clone git@github.com:SoraWebui/SoraWebui.git
```

### 2. आवश्यकताओं को स्थापित करें

```bash
cd SoraWebui && yarn
#या
cd SoraWebui && npm install
#या
cd SoraWebui && pnpm install
```

### 3. .env.example की प्रतिलिपि बनाएं और इसे .env.local में रूपांतरित करें

```bash
# वेबसाइट URL
NEXT_PUBLIC_SITE_URL=http://localhost

# ओपनएआई कॉन्फ़िगरेशन
OPENAI_API_KEY=sk-XXXXXX
OPENAI_API_BASE_URL=http://localhost:8081
OPENAI_API_MODEL=sora-1.0-turbo
```

### 4. इसे चलाएं

```bash
yarn dev
#या
npm run dev
#या
pnpm dev
```

### 5. अपने ब्राउज़र के साथ [http://localhost](http://localhost) खोलें।
![success_deploy.jpg](https://sorawebui.com/success_deploy.jpg)


# Important
SoraWebui requires [FakeSoraAPI](https://github.com/SoraWebui/FakeSoraAPI) to function properly.

