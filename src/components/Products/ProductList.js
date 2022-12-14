import React from "react";
import jumpTo from "../../modules/Navigation";
import {
  Table,Button
} from 'reactstrap';
import { Link } from "react-router-dom";

function ProductList(props) {
  const { productItem } = props;
  console.log('-------------------------------------------------------------------------', props.match.params.item);
  console.log('`${props.match.params.item}`',`${props.match.params.item}`)
  const SPICES = [{itemTam: 'சீரகம் ', item: 'Cumin Seeds - Jeera'},
  {itemTam: 'சோம்பு', item: 'Fennel Seeds'},
  {itemTam: 'மிளகு No-10', item: 'PEPPER 10mm'},
  {itemTam: 'மிளகு No-8', item: 'PEPPER 8mm'},
  {itemTam: 'வெந்தையம்', item: 'Fenugreek'},
  {itemTam: 'கடுகு', item: 'Mustard'},
  {itemTam: 'பட்டை ', item: 'Cinnamon'},
  {itemTam: 'கிராம்பு', item: 'Cloves'},
  {itemTam: 'அண்ணாச்சி பூ ', item: 'Star Anise'},
  {itemTam: 'கல்பாசி', item: 'Black Stone Flower - Indian'},
  {itemTam: 'ஜாதி பத்ரி', item: 'Jathi Pathri'},
  {itemTam: 'இலை', item: 'Bay Leaf'},
  {itemTam: 'மராட்டி மொக்கு', item: 'Kapok Buds'},
  {itemTam: 'சுருள் பட்டை', item: 'Cinnamon - Spiral'},
  {itemTam: 'விரளி மஞ்சள்', item: 'Turmeric'},
  {itemTam: 'ஜாதிக்காய்', item: 'Nutmeg'},
  {itemTam: 'சவ்வரிசி', item: 'Sago'},
  {itemTam: 'மாவு சவ்வரிசி', item: 'Maavu Savarisi'},
  {itemTam: 'வரலக்ஷ்மி சவ்வரிசி', item: 'Varalakshmi Sago'},
  {itemTam: 'சுக்கு', item: 'Dry Ginger'},
  {itemTam: 'வெள்ளை மிளகு', item: 'White Pepper'},
  {itemTam: 'வழுக்கை மிளகு', item: 'Dry Pepper'},
  {itemTam: 'வென் கடுகு', item: 'White Mustard'},
  {itemTam: 'கசகசா', item: 'Kasa Kasa'},
  {itemTam: 'ஏலக்காய் 7.2 ', item: 'Cardamoms'},
  {itemTam: 'ஏலக்காய் 8 ', item: 'Cardamoms'},
  {itemTam: 'பட்டை', item: 'Pattai'},
  {itemTam: 'காட்டு ஏலக்காய்', item: 'Black Cardamoms'},
  {itemTam: 'தீட்டல்', item: 'white Orid Dal - Split'},
  {itemTam: 'ஓமம்', item: 'Thymol Seeds'},
  {itemTam: 'எல அரிசி', item: 'Cardamom Rice'},
  {itemTam: 'சிறு கடுகு', item: 'Mustard - Small'},
  {itemTam: 'கொடம்புளி', item: 'Kerala Tamarind'},
  {itemTam: 'மஞ்சள் தூள் 500 கி', item: 'Turmeric Powder'},
  {itemTam: 'வால் மிளகு', item: 'Tailed Pepper'},
  {itemTam: 'சாஜிரா', item: 'Shahijeera'}];
const PACKING = [{itemTam: 'கார்ன் மாவு', item: 'Corn Flour'},
{itemTam: 'சத்து தானியம்', item: 'Healthmix'},
{itemTam: 'சத்து மாவு 500g', item: 'Healthmix Powder'},
{itemTam: 'நட்டு சக்கரை', item: 'Palm Sugar'},
{itemTam: 'ஓம வாட்டர்', item: 'Oma Water 1 ltr'},
{itemTam: 'மாஸ் பாதாம் மில்க் 200g', item: 'MAS Badam Drink 200g'},
{itemTam: 'மாஸ் பாதாம் மில்க் 1 Kg', item: 'MAS Badam Drink 1KG'},
{itemTam: 'பால்காயம் 100கி', item: 'Paal Kaayam 100G'},
{itemTam: 'உளுந்தங்களி மிக்ஸ்', item: 'Ulundhankali Mix'},
{itemTam: 'வெந்தய களி மிக்ஸ்', item: 'Venthayakali Mix'},
{itemTam: 'மார்த்தாண்டம் தேன் (100g,200g,500g,1kg)', item: 'Marthandam Honey (100g,200g,500g,1kg)'},
{itemTam: 'மலை தேன் (250g & 500g)', item: 'Wild Organic Honey (250g & 500g)'},
{itemTam: 'மஞ்சள் தூள் (50g, 100g, 500g)', item: 'Turmeric Powder (50g, 100g, 500g)'},
{itemTam: 'பீ.ஸி பெருங்காயம் ப்ளூ (50g & 100g)', item: 'PC Asafoetida Blue (50g & 100g)'},
{itemTam: 'பீ.ஸி பெருங்காயம் பச்சை (50g & 100g)', item: 'PC Asafoetida Green (50g & 100g)'},
{itemTam: 'பீ.ஸி பெருங்காயம் கட்டி 50g', item: 'PC Asafoetida Green 50g Bar'},
{itemTam: 'எல்.ஜி பெருங்காயம் (50g,100g & 500g)', item: 'L.G Asafoetida (50g,100g & 500g)'},
{itemTam: 'எல்.ஜி பெருங்காயம் கட்டி 50g', item: 'L.G Asafoetida Bar 50g'},
{itemTam: 'ரோஜா பூ நெய் (100ml,200ml,500ml,1ltr,5ltr,15ltr)', item: 'Roja Poo Ghee (100ml,200ml,500ml,1ltr,5ltr,15ltr)'},
{itemTam: 'ஸ்விட் சோம்பு (100g & 500g)', item: 'Sweet Sombhu (100g & 500g)'},
{itemTam: 'சீராக மிட்டாய் (100g & 1kg)', item: 'Jeera Candy 1KG'},
{itemTam: 'ஆரஞ்சு மிட்டாய் (100g & 500g)', item: 'Orange Candy (100g & 500g)'},
{itemTam: 'பாக்கு மிட்டாய் (100g & 500g)', item: 'Pakku Candy (100g & 500g)'},
{itemTam: 'புளிப்பு மிட்டாய்', item: 'Tamarind Candy'},
{itemTam: 'ஜெம்ஸ்மிட்டாய்', item: 'Gems Candy'},
{itemTam: 'சூட மிட்டாய் (100g & 500g)', item: 'Mint Candy (100g & 500g)'},
{itemTam: 'கமர்கட்டு', item: 'Kamarkut (Boost Candy)'},
{itemTam: 'சவ்வரிசி வடகம் (100g & 500g)', item: 'Savvarisi Pappad (100g & 500g)'},
{itemTam: 'மில்க் மேட் 400கி', item: 'Milkmaid 400ML'},
{itemTam: 'சாக்லேட் 380கி', item: 'Eclair 380G'},
{itemTam: 'சாக்லேட் 390கி', item: 'milkybar 390G'},
{itemTam: 'நன்னாரி ஸ்பெஷல்', item: 'Nannari Sarbath Special'},
{itemTam: 'நன்னாரி சர்பத்', item: 'Nannari Sarbath'},
{itemTam: 'ரோஸ் மில்க் ', item: 'Rose Milk'},
{itemTam: 'ஜிகர்தண்டா மிக்ஸ்', item: 'Jigarthanda Mix'},
{itemTam: 'க்ரஸ் கலர்', item: 'Crush Sarbath'},
{itemTam: 'டைமன் கற்கண்டு', item: 'Diamond Sugar'},
{itemTam: 'தானிய நூடுல்ஸ்', item: 'Millets Noodles'},
{itemTam: 'பச்சை கற்பூரம்', item: 'Edible Camphor'},
{itemTam: 'மஞ்சள் கிழங்கு சிறியது', item: 'Small Manjal Kilanghu'},
{itemTam: 'மஞ்சள் கிழங்கு மீடியம்', item: 'Medium Manjal Kilanghu'},
{itemTam: 'மஞ்சள் கிழங்கு பெரியது', item: 'Bold Manjal Kilanghu'},
{itemTam: 'பேட் வடகம் (100g,1kg)', item: 'Bat Pappad (100g,1kg)'},
{itemTam: 'தேங்காய் பர்பி', item: 'Coconut Burfi'},
{itemTam: 'பூ கற்கண்டு', item: 'Poo Kalkandu '},
{itemTam: 'வெல்லம்', item: 'Cane Jaggery '},
{itemTam: 'பானி பூரி (100g,1kg)', item: 'Pani Poori (100g,1kg)'},
{itemTam: 'குல்கந்து டவர் 500கி', item: 'Tower Glukand 500g'},
{itemTam: 'ஓமம் ', item: 'Oomam'},
{itemTam: 'கமர்கட்', item: 'Kamarkat'},
{itemTam: 'இந்துப்பு 1கிலோ', item: 'Rock Salt 1kg pack'},
{itemTam: 'கரி உப்பு 1kg pack', item: 'Black Salt 1kg pack'},
{itemTam: 'கிரீன் டீ', item: 'Green Tea'},
{itemTam: 'பணங்கற்கண்டு', item: 'Palm Jaggery'},
{itemTam: 'கூந்த பணங்கற்க்கண்டு', item: 'Koondha Panangarkandu'},
{itemTam: 'அகர் அகர் 10கி', item: 'AGAR AGAR 10G'},
{itemTam: 'சாம்பிரானி', item: 'Saambirani'},
{itemTam: 'வெள்ளை குங்கிலியம்', item: 'White Kungiliyam'},
{itemTam: 'புஸ் ஆரஞ்சு ரெட் பொடி 100கி', item: 'Bush Orange Red Color 100g'},
{itemTam: 'புஸ் லெமன்எல்லோ பொடி100கி', item: 'Bush Lemon Yellow Color 100g'},
{itemTam: 'ஆர் . கே குலோப்ஜாமுன்', item: 'Orkay'},
{itemTam: 'ஆப்பிள் வினிகர் ', item: 'Apple Vinegar'},
{itemTam: 'வினிகர் 200.மி.லி', item: 'VINEGAR 200ML'},
{itemTam: 'வினிகர் 750 மிலி ', item: 'VINEGAR 750ML'},
{itemTam: 'சம்பா வத்தல்', item: 'Spicy Red Chilli'},
{itemTam: 'குண்டு வத்தல்', item: 'Red Chilli'},
{itemTam: 'மல்லி', item: 'Coriander'},
{itemTam: 'நாட்டு மல்லி', item: 'Country Coriander'}
]
const OTHERS = [
  {item : 'SWEET SOMBHU 1KG', itemTam: 'ஸ்விட் சோம்பு 1கிலோ'},
{item : '100 SWEET SOMBHU ', itemTam: 'ஸ்வீட் சோம்பு 100கி'},
{item : '100 ORANGE CANDY', itemTam: 'ஆரஞ்சு மிட்டாய் 100கி'},
{item : '100 PAAKKU CANDY', itemTam: 'பாக்கு மிட்டாய் 100கி'},
{item : '100 SUDA MITTAI', itemTam: 'சூட மிட்டாய் 100கி'},
{item : '100 PAPPAD', itemTam: 'வடகம் 100கி'},
{item : 'LG PERUNGAYAM50G', itemTam: 'எல்.ஜி.பெருங்காயம தூள் 50கி'},
{item : 'LG PERUNGAYAM100G', itemTam: 'எல்.ஜி.பெருங்காயம் தூள் 100கி'},
{item : 'MILKMAID400ML', itemTam: 'மில்க் மேட் 400கி'},
{item : 'PASU GHEE100ML', itemTam: 'பசுநெய்100ML'},
{item : 'ROJA GHEE 200ML', itemTam: 'நெய் 200மி'},
{item : 'W GHEE 100ML', itemTam: 'உ.நெய் 100மி'},
{item : 'W GHEE 200ML', itemTam: 'உ.நெய் 200மி'},
{item : 'ROJA GHEE 500ML', itemTam: 'நெய் 500மி'},
{item : 'W GHEE 500ML', itemTam: 'உ.நெய் 500மில்லி'},
{item : 'ECLAIR 380G', itemTam: 'சாக்லேட 380கி'},
{item : 'MILKYBAR 390G', itemTam: 'சாக்லேட் 390கி'},
{item : 'ORANGE CANDY 500G', itemTam: 'ஆரஞ்சு மிட்டாய் 500கி'},
{item : 'SUDA MITTAI 500G', itemTam: 'சூட மிட்டாய் 500கி'},
{item : 'PAAKKU MITTAI 500G', itemTam: 'பாக்கு மிட்டாய் 500கி'},
{item : 'PAPPAD 500G', itemTam: 'வடகம் 500கி'},
{item : 'NANNARI SPL', itemTam: 'நன்னாரி ஸ்பெஷல்'},
{item : 'NANNARI SARBATH', itemTam: 'நன்னாரி சர்பத்'},
{item : 'ROSE MILK ', itemTam: 'ரோஸ் மில்க் '},
{item : 'JIGARTHANDA MIX', itemTam: 'ஜிகர்தண்டா மிக்ஸ்'},
{item : 'DIAMOND', itemTam: 'டைமன் கற்கண்டு'},
{item : 'M NOODLES', itemTam: 'தானிய நூடுல்ஸ்'},
{item : '24 MANTHRA HONEY 500G', itemTam: '24 மந்தரதேன் 500மி'},
{item : 'RAMAIN 1GM', itemTam: 'ராமாயன் 1கி'},
{item : 'ROYAL SAFFARON', itemTam: 'குங்கும பூ 1கி'},
{item : 'PACHAI KARPOORAM ', itemTam: 'பச்சை கற்பூரம்'},
{item : 'PACHAI KARPOORAM 450G', itemTam: 'பச்சை கற்பூரம் 450கி'},
{item : 'PACHAI KARPOORAM 2G', itemTam: 'பச்சை கற்பூரம் 2கி'},
{item : 'S MANJAL', itemTam: 'மஞ்சள் சிறியது'},
{item : 'M MANJAL', itemTam: 'மஞ்சள் மீடியம்'},
{item : 'B MANJAL', itemTam: 'மஞ்சள் பெரியது'},
{item : 'BAT VADAGAM 250', itemTam: 'பேட் வடகம்'},
{item : 'JEERA CANDY 1KG', itemTam: 'சீராக மிட்டாய் 1கிலோ'},
{item : 'COCONUT BURFI', itemTam: 'தேங்காய் பர்பி'},
{item : 'POO KALKANDU', itemTam: 'பூ கற்கண்டு 1கி'},
{item : 'VELLAM', itemTam: 'வெல்லம்'},
{item : 'PANI POORI 1KG', itemTam: 'பானி பூரி 1கி'},
{item : 'PANANGARKAN MIX 250G', itemTam: 'பணங்கற்கண்டு மிக்ஸ் 250கி'},
{item : 'ROJA GHEE 100ML', itemTam: 'நெய் 100மி'},
{item : 'TOWER GULKAND 500G', itemTam: 'குல்கந்து டவர் 500கி'},
{item : '100 PANI POORI', itemTam: 'பாணி பூரி 100கி'},
{item : 'OOMAM BAG 1 KG', itemTam: 'பை ஓமம் 1 கிலோ'},
{item : 'KAMARKAT', itemTam: 'கமர்கட்'},
{item : 'LG KATTI 50G', itemTam: 'எல்.ஜி.கட்டி பெருங்காயம் 50கி'},
{item : 'APPLE VINIGER 473ML', itemTam: 'ஆப்பிள் வினிகர் 473மில்லி'},
{item : 'ROCK SALT 1KG', itemTam: 'இந்துப்பு 1கிலோ'},
{item : 'GREEN TEA', itemTam: 'கிரீன் டீ'},
{item : 'ROCK SALT', itemTam: 'இந்துப்பு கல்'},
{item : 'KOONDHA PANANGARKANDU', itemTam: 'கூந்த பணங்கற்க்கண்டு'},
{item : 'VASAMBHU', itemTam: 'வசம்பு'},
{item : 'PAI S', itemTam: 'பை'},
{item : 'PAI B', itemTam: 'பை'},
{item : 'PACKING COOLI', itemTam: 'பை   கூலி'},
{item : 'PC KATTI 50G', itemTam: 'பி சி கட்டி 50கி'},
{item : 'SPL AGAR AGAR 10G', itemTam: 'அகர் அகர் நயம் 10கி'},
{item : 'PC GREEN 100G', itemTam: 'பி சி பச்சை 100கி'},
{item : 'PC BLUE 50G', itemTam: 'பி சி ப்ளு 50கி'},
{item : 'PC BLUE 100G', itemTam: 'பி சி ப்ளு 100கி'},
{item : '100 JEERA CANDY', itemTam: 'சீராக மிட்டாய் 100கி'},
{item : '50 GEMS CANDY', itemTam: ' 50 ஜெம்ஸ்மிட்டாய்'},
{item : '15 GEMS CANDY', itemTam: '15 ஜெம்ஸ்மிட்டாய்'},
{item : 'S GEMS', itemTam: 'ஜெம்ஸ் சிரியது'},
{item : 'SAAMBIRANI', itemTam: 'சாம்பிரானி'},
{item : 'W KUNGILIYAM', itemTam: 'வெள்ளை குங்கிலியம்'},
{item : ' BLUE JEERA CANDY 1KG', itemTam: 'நயம் சீரக மிட்டாய் 1கி'},
{item : 'BL JEERA CANDY 1KG', itemTam: 'நயம் சீரக மிட்டாய் 1கி'},
{item : 'KAMARKAT 1SET', itemTam: 'கமர்கட்டு 1செட்'},
{item : 'BUSH OR POWDER 100G', itemTam: 'புஸ் ஆரஞ்சு ரெட் பொடி 100கி'},
{item : 'BUSH LEMON YELLOW POWDER 100G', itemTam: 'புஸ் லெமன்எல்லோ பொடி100கி'},
{item : 'ORKAY', itemTam: 'ஆர் . கே குலோப்ஜாமுன்'},
{item : 'LG PERUNGAYAM 500G', itemTam: 'எல்.ஜி. பெருங்காயம் 500கி'},
{item : '100 PULI MITTAI', itemTam: '100கி புளிப்பு மிட்டாய்'},
{item : '50 PULI MITTAI', itemTam: '50கி புளிப்பு மிட்டாய்'},
{item : 'PULI MITTAI ', itemTam: 'புளி மிட்டாய்'},
{item : 'VINEGAR 200ML', itemTam: 'வினிகர் 200.மி.லி'},
{item : 'VINEGAR 750ML', itemTam: 'வினிகர் 750 மிலி '},
{item : 'GEMS ', itemTam: 'ஜெம்ஸ்'}
]

const MILLETS= [{itemTam: 'கம்பு', item: 'Kambhu'},
{itemTam: 'கேப்பை', item: 'Keppai'},
{itemTam: 'வெள்ளை உளுத்து', item: 'White Ulundhu (Full), Orid Dal - White'},
{itemTam: 'கருப்பு உளுத்து ', item: 'Black Ulundhu (Full), Orid Dal - Black'},
{itemTam: 'கருப்பு உடை உளுத்து (தொலி உளுந்து)', item: 'Black Udai Ulundhu, Orid Dal - Broken'},
{itemTam: 'து.பருப்பு', item: 'Thuvaram Paruppu, Toor Dal'},
{itemTam: 'பாசி பருப்பு', item: 'Paasi Paruppu'},
{itemTam: 'பாசி பயறு', item: 'Paasi Payaru'},
{itemTam: 'கடலை பருப்பு', item: 'Kadala Paruppu'},
{itemTam: 'குதிரைவாலி அரிசி', item: 'Kuthiraivaali Rice'},
{itemTam: 'தினண அரிசி', item: 'Thinasi Rice'},
{itemTam: 'வரகு அரிசி', item: 'Varaghu Rice'},
{itemTam: 'மாப்பிள்ளை சம்பா', item: 'Mappillai Sambha Rice'},
{itemTam: 'சாமை அரிசி', item: 'Samai Rice'},
{itemTam: 'சிகப்பு அரிசி', item: 'Red Rice'},
{itemTam: 'கருப்பு கவுனி', item: 'Black Kavuni'},
{itemTam: 'மூங்கில் அரிசி', item: 'Baamboo Rice, Moongil Rice'},
{itemTam: 'காட்டுயானம் அரிசி', item: 'Kattu Yaanam Rice'},
{itemTam: 'கேரளா அரிசி', item: 'Kerala Rice'},
{itemTam: 'வெள்ளை சோயா', item: 'White Soya'},
{itemTam: 'பொரிகடலை ', item: 'Pori Kadalai - Puffed Grams'},
{itemTam: 'நிலகடலை - வறுத்தது', item: 'Roasted - Peanuts'},
{itemTam: 'கருப்பு மொச்சை', item: 'Black Mochai'},
{itemTam: 'வெள்ளை மொச்சை', item: 'White Mochai'},
{itemTam: 'பார்லி', item: 'Barley'},
{itemTam: 'சோளம்', item: 'Cholam'},
{itemTam: 'வெள்ளை சுண்டல்', item: 'White Sundal'},
{itemTam: 'கருப்பு சுண்டல்', item: 'Black Sundal'},
{itemTam: 'வெள்ளை அவல்', item: 'White Aval'},
{itemTam: 'மட்டை அவல்', item: 'Mattai Aval'},
{itemTam: 'ராஜ்மா', item: 'Rajma'},
{itemTam: 'வெள்ளை காணம்', item: 'White Kaana Payiru'},
{itemTam: 'கருப்பு காணம்', item: 'Black Kaana Payiru'},
{itemTam: 'கீமா பட்டாணி', item: 'Keema Pattani'},
{itemTam: 'தட்டை பயிறு', item: 'Thatta Payiru'},
{itemTam: 'பாப் கார்ன் சோளம்', item: 'Pop Corn Cholam'},
{itemTam: 'கோதுமை', item: 'Wheat'},
{itemTam: 'வெள்ளை பட்டாணி', item: 'White Pattani'},
{itemTam: 'சம்பா கோதுமை', item: 'Sambha Kothumai'},
{itemTam: 'போர் மொச்சை', item: 'Poor Mochai'},
{itemTam: 'பனி வரகு', item: 'Pani Varaghu'},
{itemTam: 'பூங்கார் அரிசி', item: 'Poongar Rice'}]

const HERBALS = [{itemTam: 'இன்ஜக்ஸன் 50கிர', item: 'Injuction Tooth Power 50g'},
{itemTam: 'நாகர்ஜுனா 50G', item: 'Nagarjuna Tooth Power 50g'},
{itemTam: 'குங்கும பூ ', item: 'Saffaron'},
{itemTam: 'திரிபலா (50g & 100g)', item: 'Thiriphala Power (50g & 100g)'},
{itemTam: 'ஆலிவ் ஆயில் ', item: 'Olive Oil 100ml'},
{itemTam: 'ரோஸ் வாட்டர் 100மில்லி', item: 'Rose Water 100ml'},
{itemTam: 'பாதாம் ஆயில் 50கி', item: 'Badam Oil 50ml'},
{itemTam: 'பாதாம் ஆயில் 25கி', item: 'Badam Oil 25ml'},
{itemTam: 'கருஞ்சீரகம் ஆயில் 50ml & 100ml', item: 'Black Seed Oil 50ml & 100ml'},
{itemTam: 'கடுக்காய்பொடி 50கி', item: 'Kadukkai Powder 50g'},
{itemTam: 'அதிமதுரம்பொடி50G', item: 'Athimathuram Powder 50g'},
{itemTam: 'சுக்குபொடி30G', item: 'Sukku Powder 50g'},
{itemTam: 'ஜாதிக்காய்பொடி30g', item: 'Jaathikaai Powder 30g'},
{itemTam: 'மாதுளைபொடி50g', item: 'Maadhulai Thool Powder 50g'},
{itemTam: 'பூனைக்காலிபொடி50g', item: 'Poonai Kaali Powder 50g'},
{itemTam: 'வெள்ளைகரிசலகண்ணிபொடி 50கி', item: 'White Karisalaanganni 50g'},
{itemTam: 'கீழாநெல்லிபொடி50g', item: 'Keelanelli Powder 50g'},
{itemTam: 'யனைநெருஞ்சில்பொடி50g', item: 'Yaani Nerunjil Mul Powder 50g'},
{itemTam: 'சதக்குப்பைபொடி50g', item: 'Sathai Kuppai Powder 50g'},
{itemTam: 'தூதுவளை பொடி 50 கி', item: 'Thuthuvalai Powder 50g'},
{itemTam: 'துளசி பொடி 50கி', item: 'Thulasi Powder 50g'},
{itemTam: 'புதினா இலை பொடி 50கி', item: 'Mint Leaf Powder 50g'},
{itemTam: 'நாவல் பட்டை பொடி 50கி', item: 'Naavall Pattai Powder 50g'},
{itemTam: 'நாவல் கொட்டை பொடி 50கி', item: 'Naval Kottai Powder 50g'},
{itemTam: 'கழற்ச்சிக்காய் பொடி 30கி', item: 'Kalarchikaai Powder 50g'},
{itemTam: 'வில்வம் இலை பொடி 50கி', item: 'Villvam Ilai Powder 50g'},
{itemTam: 'வேப்பிலை பொடி 50கி ', item: 'Neem Leaf Powder 50g'},
{itemTam: 'ஓரிதழ் தாமரை பொடி 50கி', item: 'Oridhal Thaamarai Powder 50g'},
{itemTam: 'சித்தரத்தை பொடி 50கி', item: 'Sitharathai Powder 50g'},
{itemTam: 'செம்பருத்தி பூ பொடி 50கி', item: 'Hibiscus Flower Powder 50g'},
{itemTam: 'ஆவாரம் பூ பொடி 50கி', item: 'Aavarampoo powder 50g'},
{itemTam: 'முருங்கை பூ பொடி 30கி', item: 'Murungaipoo Powder 50g'},
{itemTam: 'அவுரி இலை பொடி 50கி', item: 'Avuri Ilai Powder 50g'},
{itemTam: 'அருகம்புல் பொடி 50கி', item: 'Arugampul Powder 50'},
{itemTam: 'அஸ்வகந்தா பொடி 50கி', item: 'Ashwagantha Powder 50g'},
{itemTam: 'முல்தானிமட்டி பொடி 50கி', item: 'Multhanimitti Powder 50g'},
{itemTam: 'மருதாணி இலை பொடி 50கி', item: 'Henna Powder 50g'},
{itemTam: 'நெல்லிக்காய் பொடி 50கி', item: 'Amla Powder 50g'},
{itemTam: 'கபசுர குடிநீர் 50கி', item: 'Kabasura Kudineer 50g'},
{itemTam: 'நில வேம்பு 50கி', item: 'Nila Vembhu Powder 50g'},
{itemTam: 'கஸ்தூரி மஞ்சள் பொடி 50கி', item: 'Kasthuri Manjal Powder 50g'},
{itemTam: 'பாசி பயிறு பொடி 50கி', item: 'Paasi Payiru Powder 50g'},
{itemTam: 'ஆரஞ்சு தோல் பொடி 50கி', item: 'Orange Powder 50g'},
{itemTam: 'எலுமிச்சை தோல் பொடி 50கி', item: 'Lemon Powder 50g'},
{itemTam: 'சித்தரத்தை', item: 'Sitharathai'},
{itemTam: 'அதிமதுரம்', item: 'Athimathuram'},
{itemTam: 'திப்பிலி', item: 'Thippili'},
{itemTam: 'கஸ்தூரிமஞ்சள்', item: 'Kasthuri Manjal'},
{itemTam: 'பூலாங்கிழங்கு', item: 'Poolan Kilangu'},
{itemTam: 'வசம்பு', item: 'Vasambhu'},
{itemTam: 'கலர்சிக்காய்', item: 'Kalarchikaai'},
{itemTam: 'மாசக்காய்', item: 'Machakkai'},
{itemTam: 'பாதாம் பிசின்', item: 'Badam Pisin'},
{itemTam: 'தேன் காய்', item: 'Then Kaai '},
{itemTam: 'நன்னாரி வேர்', item: 'Nannari Ver'},
{itemTam: 'கடுக்காய்', item: 'Kadukkai'},
{itemTam: 'ராஜம் சுக்கு காபி 100கி', item: 'Rajam Sukku Coffe 100g'},
{itemTam: 'வெட்டிவேர் 50கி', item: 'Vettiver 50G'},
{itemTam: 'வெட்டிவேர்', item: 'Vettiver'}]

const DRYFURITS = [{itemTam: 'முந்திரி பிளவு ', item: 'Cashew Nut (Split)'},
{itemTam: 'முழு முந்திரி ', item: 'Cashew Nut (Full)'},
{itemTam: 'முழு முந்திரி - W180', item: 'Cashew Nut (Full) - W 180'},
{itemTam: 'முந்திரி பீஸஸ்', item: 'Cashew Nut (Pieces)'},
{itemTam: 'முந்திரி குருணை', item: 'Cashewnut (Bits)'},
{itemTam: 'கிஸ்மிஸ்', item: 'Kishmish'},
{itemTam: 'பாதாம் ', item: 'Almonds'},
{itemTam: 'பிஸ்தா', item: 'PISTA'},
{itemTam: 'சால்ட் பிஸ்தா', item: 'Salt Pista'},
{itemTam: 'அத்தி பழம்', item: 'Figs'},
{itemTam: 'கருப்பு திராட்சை', item: 'Black Raisins (With Seed)'},
{itemTam: 'க்ரான் பெர்ரி', item: 'Cran Berry - Dried'},
{itemTam: 'ப்ளூ பெர்ரி', item: 'Blue Berry - Dried'},
{itemTam: 'ப்ளாக் பெர்ரி', item: 'Black Berry - Dried'},
{itemTam: 'ஸ்ட்ராபெர்ரி', item: 'Straw Berry - Dried'},
{itemTam: 'கிவி', item: 'Kiwi - Dried'},
{itemTam: 'இஞ்சி சிப்ஸ்', item: 'Ginger Chips'},
{itemTam: 'க்ளுகோஸ் நெல்லி', item: 'Glucose Amla'},
{itemTam: 'தேன் நெல்லி', item: 'Honey Amla'},
{itemTam: 'ஹாஸீல் நட்ஸ்', item: 'Hazel Nuts'},
{itemTam: 'பிரேசில் நட்ஸ்', item: 'Brazil Nuts'},
{itemTam: 'அக்ரூட்', item: 'Walnuts -  Broken & Full'},
{itemTam: 'கரோண்டா', item: 'Karonda'},
{itemTam: 'டூட்டி புரூட்', item: 'Dooty Fruit'},
{itemTam: 'உலர் பப்பாளி', item: 'Dry Dooty Fruit'},
{itemTam: 'பேரிச்சம்பழம்', item: 'Dates - Ordinary'},
{itemTam: 'கருப்பு பேரிச்சை ', item: 'Black Dates (Iran,Omen,Arabian)'},
{itemTam: 'பேரிச்சை (விதை நீக்கியது)', item: 'Seedless Dates'},
{itemTam: 'வெள்ளரி விதை', item: 'Cucumber Seeds'},
{itemTam: 'வெள்ளை பூசணி விதை', item: 'Watermelon Seeds - White'},
{itemTam: 'பச்சை பூசணி விதை', item: 'Pumkin Seeds'},
{itemTam: 'சூர்ய காந்தி விதை', item: 'Sunflower Seeds'},
{itemTam: 'ஆளி விதை', item: 'Flax Seeds'},
{itemTam: 'சியா விதை', item: 'Siya Seeds'},
{itemTam: 'சாலியா விதை', item: 'Saaliya Seeds'},
{itemTam: 'வெள்ள எல்', item: 'Sesame Seeds - White'},
{itemTam: 'கருப்பு எல்', item: 'Sesame Seeds - Black'},
{itemTam: 'கருஞ்சீரகம்', item: 'Black Jeera'},
{itemTam: 'சப்ஜா', item: 'Basil Seeds'},
{itemTam: 'முழு தேன் நெல்லி', item: 'Honey Amla Full Piece'},
{itemTam: 'கருப்பட்டி', item: 'Palm Jaggery'},
{itemTam: 'பேரிச்சங்காய்', item: 'Kajur Kaai - Dry Dates'},
{itemTam: 'ஆல்பக்கடா', item: 'Aalubukkara - Dried Plums'},
{itemTam: 'ஆங்கூர்', item: 'Aangur Grapes'},
{itemTam: 'சார பருப்பு', item: 'Saara Paruppu'},
{itemTam: 'ப்ரோடீன் புட் 250கி', item: 'Protien Food 250g'},
{itemTam: 'ப்ரோடீன் புட் 500கி', item: 'Protien Food 500g'},
{itemTam: 'தேன் அத்தி 250கி', item: 'Honey Fig 250g'},
{itemTam: 'தேன் நெல்லி 250கி', item: 'Honey Amla 250g'},
{itemTam: 'தேன் நெல்லி - முழு நெல்லி', item: 'Honey Amla Full piece 20KG TIN'},
{itemTam: 'ஆப்ரிகாட்', item: 'Apricots'}] 

let VALUES;
if (props.match.params.item === 'SPICES') {
  VALUES = SPICES;
} else if (props.match.params.item === 'PACKING') {
  VALUES = PACKING;
} else if (props.match.params.item === 'MILLETS') {
  VALUES = MILLETS;
} else if (props.match.params.item === 'HERBALS') {
  VALUES = HERBALS;
} else if (props.match.params.item === 'DRYFURITS') {
  VALUES = DRYFURITS;
} else if (props.match.params.item === 'OTHERS') {
  VALUES = OTHERS;
}
  return (
    <div className="align-items-center" >
      <br/>
      <Link to="/southern-traders">
      <Button style={{marginLeft: '20px'}} alignItems={'Center'}
    color="primary"
  >
    Back
  </Button>
  </Link>
  <br/><br/>
      <Table striped align responsive style={{backgroundColor: '#f1f1f1'}}>
  <thead>
    <tr>
      <th></th>
      <th>
        <b>
      பொருள்கள்
      </b> 
      </th>
      <th>
        ITEMS
      </th>
    </tr>
  </thead>
  <tbody>
{
  VALUES.map((item, index) => {
    return (<tr>
      <td>{++index}</td>
      <td>{item.itemTam}</td>
      <td>{item.item}</td>
    </tr>)
  })
}   
  </tbody>
</Table>
<Link to="/southern-traders">
      <Button style={{marginLeft: '20px'}} alignItems={'Center'}
    color="primary"
  >
    Back
  </Button>
  </Link>
    </div>
  );
}

export default ProductList;
