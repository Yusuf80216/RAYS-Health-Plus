'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9d36984760f37f01cfcdfc6b12f522db",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f733580454ad1f6dc95e7e90d577c379",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "84e3e95fcb94e28490d04388da7dbe7f",
".git/logs/refs/heads/main": "b3c9ee12d60e9479f47bfa76049457fc",
".git/logs/refs/heads/master": "1ff797baa11a29253598ea7b1a3d799b",
".git/logs/refs/remotes/origin/HEAD": "5ceb4d9ae647b77b7e0306930e49eb87",
".git/logs/refs/remotes/origin/main": "17f010c3769e9c6bd74f08d4ea83e159",
".git/logs/refs/stash": "843c537f31f46fed69a87f00e95b859a",
".git/objects/02/30ae44d7566d234cc828f7fb4521bc3f688c4f": "26a941a91a324876076029453bc28bdc",
".git/objects/02/de50ec4fbaed9a0f414b8878b4d94c14cfe3a8": "f46fb4a61c840bad4b2f2ebeef94ad93",
".git/objects/05/33bca780ffcea95f5415efed3101895ada9766": "4d8717d616371b727e0d07ea5428977e",
".git/objects/05/cbf103f679eb943c35f91a4f8e285c2ef0bd85": "c1b008dba50c579d5bbb4dcbb8f6d59b",
".git/objects/05/e9697d4da5b6ec303fa6c53b919009827193c6": "0532ffa82f89f2144b806343fdb0b0bf",
".git/objects/06/dfbd2c55c7f4c230c877655e5845ece52b7a45": "fbde8f9713d3b4644a6ec87526ae018f",
".git/objects/07/70034229e74287628ec0cacab74e3af7858a5c": "1e58d3e41faef14303788d8e90ddd69d",
".git/objects/0b/d09585e11abf8a06276b9a095536594e39582f": "e4ceafbb9a73cef38611d730a449940a",
".git/objects/0c/bc4b66659d95fb0665da09ce304050dea0c42f": "2520bb12d1218cc3423bd1d637bd1112",
".git/objects/0e/4b678a235ee37716bdf33a63207cc024682c2d": "25bd35163ca61f941151cac7b94e958d",
".git/objects/0f/6247148a5b469ee492771a7389faa0483d0d5b": "f080efd83b3a203036268fe5f41a8d0d",
".git/objects/11/595b701a71415cb1bfd0ddcdb50d1ffbdd4f30": "0c9fbcbb8cf7fb9db389ee4cf2c480b0",
".git/objects/11/637a5bb924d1769ca3776e3441baacd3210683": "34dec1fa1be5cb6418d8872c230e8471",
".git/objects/12/5328d7e69013f75fe842a7e420143c6928acd6": "15fb44fcec1e3b89913e35e57e64bb3c",
".git/objects/12/9c18d164fb50c49f858493101bf52d8ff0333f": "d3c4ccb670692d73a7860de6e1f0ec57",
".git/objects/12/b26e1002c62d40a86e151a005c862484388189": "b12adf5009f8a0a7c0a82f197972231c",
".git/objects/13/9fa14ba2fb90c861a8587cf86a62be06feffec": "7e4079b5018d1e2905744a9d0fc7d6b1",
".git/objects/14/0539305952603bc5fa64ab14acb2ef970727f6": "cb6b55750c6009a8f058897d60a0d26a",
".git/objects/14/917ad807eb46923d90df379a9a70f8c45c787f": "f01635e217a3fd05b18aae57aba3669b",
".git/objects/16/a140594dde06cf848d46a12b8caef0483f08d5": "2f6d0aca562bdef6549a8fcbf9ad33f4",
".git/objects/16/eeabc933cf570c160403ac5b1bdc00343b3c7a": "6e8a47a069363cb4d81117aa8bbabbb0",
".git/objects/18/9239d0a6047ba7d8a634d4ec713f29ffa5c332": "78f5db3b849beaffba2193ac5a1c5598",
".git/objects/18/c172429d4ad6cbffdd2b3e092e3940f6697b8a": "0f662574dac9d6d7b74f524d48b3ab75",
".git/objects/1a/9f2266034c9de06465fac830ed10f7859f1df0": "5b9860557a80f1be4194088a69235206",
".git/objects/1c/e0de5e91eafc11b35bd3e8dccde0fc1936a584": "a90c19fba7f6c6de605ce303c1484379",
".git/objects/1d/8ef7f26d6c5eeae89b9c0e38cde47081dec81b": "3ae5e91286b774e6e6c9fe8779534612",
".git/objects/20/2668b65d43012d09b98b3babdee0a967f9dabf": "bbbef84ce9fb301e58a5828332e6ae45",
".git/objects/21/eda13ba7474843dc13861b1f6826273d7d8a26": "7e4e584a41b0f6ca0f999ad2d26d4bb5",
".git/objects/24/1c996fdf0f7c0442750d430f270433ef20c2f3": "dcb4bab53ed63f69bf69ad0cfce9daf7",
".git/objects/24/fd207dbbf07afa3ab012846fe25a376f5892e8": "3b30e0de64fb6c47b16b78a0b3b214de",
".git/objects/25/077e82fe42b17c2612fb7242d0f09a01b68bce": "3489ea1586f21d6eeca8ec610f0ff124",
".git/objects/25/3c7bd4eb29b874b3068f6dd4e7466242fea9ed": "c5650f3c06c847790839042575a71aed",
".git/objects/25/43dea010d3bed6777df8fa28e3888302257f43": "e8082344a86718935579972f374b4efe",
".git/objects/26/821062be5dc94c78187a0adc02f8d5f4ea0106": "9bc856af1768666a92fe94c013e3f9a0",
".git/objects/28/b35cbee043bfe8da90422aa4bac776edf5a9f5": "5b2cf7e26d4f49b7c3562168da4c2a6b",
".git/objects/2b/55ea2ec11c598a0660e65be280b2c532e3ab14": "69c19a0e9c89d66879b2a99ff525c1e8",
".git/objects/2d/43bac2895dcfd2064b43c77be43807f9cb784f": "4e79bc06cba0eba6e880025700b52cf2",
".git/objects/2e/a3b6749727acab5d1c0f2438e94ce425b3ab5a": "8a4b2b81bf5b61d1d825ea349293bf4e",
".git/objects/32/807bcec0d000d169104e0bc5dea8cdea2ad852": "48d92c4c09c80be709dd2bc0f5aedb5c",
".git/objects/33/ff2b0404f42ab597fbe79b2807285edf5f2774": "70d1e83af52784eccb3f9d37506bb4ae",
".git/objects/34/a8a2815269e7ee736c40c80d3cb500fc9c1ed8": "2fd57ebd61d63353edf49081c46400bb",
".git/objects/34/fb276b36849110df53fb08992e9d28d4048350": "8fd8e19a262e441042bd9027700817ce",
".git/objects/35/8b283c5e0607d104bd24ad423c227efdfa23f5": "fc51b1d53f1fd060707856cceebb44a3",
".git/objects/36/c61e7315e2c6ac83a901035fa847c39f53f929": "89b142ddf193c159382ba7c74806d5b4",
".git/objects/39/4b0389f38d51271056719d5216b5b4b347043c": "9ee9d6025ada9d9a9eb71d786f23d5c7",
".git/objects/3a/0809e9623486be592434403829a228de9c8b96": "dd388dfd6d8476c5d36fc89c781c5e22",
".git/objects/3a/462f44558dc0fbd264edc9baf792048c36863a": "f544b93fc6ec2d9d5f88d4ddb5f186da",
".git/objects/3a/8bd9c95e6f1cb11352936a824ee0c6bfb4fccf": "abda09c01868eb4cf4fdf0ab0efe9550",
".git/objects/3b/e1aba93729812e389c7e088d841c45e2ccefb3": "be2856521db3e980d2f64226f12f83ba",
".git/objects/3d/1715ca6d567b3364eb6e11d5e0ad80fe00f97e": "75ac5002e838708ea3dda3a41342dabc",
".git/objects/3d/f93cce4a9c5089e4504a243e1156ef6b9c1e27": "bbbe7f68648bb3c07cfd3a8ac93b0d7f",
".git/objects/3e/485cb63f8fd8ddeec4197eeaabde41e2f53ed7": "5319d0ee3ce05b917efb35c32e16bf35",
".git/objects/3e/6100b1eea5b5ca720ebd7960bedd7d47822e1e": "1e96225b09cc06ed1c8f532758ebbbf4",
".git/objects/3e/bc0eddccb06afc185186433aadc9590cb98c3f": "305f50b57ea574571bcbcfc4a10f9b3a",
".git/objects/3f/7f8806cdffcd6d18c40e0fffcd1a1c7d7b13dd": "d9f1d9bd3326e4bd82880ca36a5b878c",
".git/objects/40/cc0e7d8d67fc46243a4d0331548cd45fb077b8": "2b5132e0f72d5cd2565e3996c3908930",
".git/objects/41/52a00f084297c966bb04252a4d91c3c703c1d7": "bd85f8ba2fd3c55ee46aacd5834ca6a8",
".git/objects/41/bccf2481e55303f6265268d95c1267f46659fa": "d8133c0958916e5ae51bc47aa2370459",
".git/objects/42/46c2a7d3f190d3e8ba2e7208fbf76404f7eda3": "b552c587ec3af74640647479ae00f59f",
".git/objects/42/ea9e41aea1288146b287d0c35dd5f3449d1fd2": "9a62368abaa73cde2c7634b493311f92",
".git/objects/43/c9e300c1a1d9aad1c70e6c584f1bdecaf00170": "51dafc7649964cc7eacac94862b4363b",
".git/objects/45/f7c935f7ddb42d52918d38e6e0a19ad2b3807b": "ecda1d601b746bbf795b70edbb83383c",
".git/objects/46/e840aea1ab7a0340d8b6368ab24a2f0ffafa7a": "0afdfcbc450cf5c75f7bdac2e0affa70",
".git/objects/46/fb96c2aa74272e45df0d1331b26e28835734f3": "b5f5d9f87b9e2b1a57c4d9b86a7c38f8",
".git/objects/47/1363e4928ff3cdf9cc212ba3d669113459acde": "4e6aaf669db8bea86e9d565f349ac416",
".git/objects/47/16b679749038ac1c640d9f045073b2624fb60e": "6c468e4435cea16bd83206557b3ede4c",
".git/objects/47/2382d4e95761f72f9daf016b6a6b6944d70d7c": "c15fe8d1f791728535174d60deb94e1e",
".git/objects/47/87bc7947aba1e850669de032b32f96b64652da": "b0f64cc3b277c09f4c4031809c111a81",
".git/objects/47/d93c26189c2bc47ebac37449bd4d3dc089c39a": "f83e979528be74f2faed3f4ace5279d2",
".git/objects/48/2189e9df4baffc730820d7c3d54195522a7ce1": "18b88e6a2bdcc178e7daea7083bc3efe",
".git/objects/48/706c6ef8d10ac497e02c82ed47c15df540a0cc": "e145407e9fccf3ab05ed52ea1b08c1f9",
".git/objects/4b/361a8a681f01fb8dec231d73fb1fa8eb446a85": "53f3068ba495b9c89c48b549acf1860b",
".git/objects/4b/c76e9df3fc35b5d4da84ecbb2f429739eb64e9": "a33db73fdfdcbcd6afc0abbb5caa7386",
".git/objects/4c/4eed6c7a68514d8615c3134eaf71058e76a729": "bcb27322dcea129cba2f4ecedd5c5f68",
".git/objects/4e/440c1461796db391ae6950f85302f6fc328513": "c8c1abb22f65c86d57ae5205db446ee1",
".git/objects/50/7afa787696a799a7447f6e9b0cd2147ea2828e": "e905efbad2e1b6eeacac08c507aeca37",
".git/objects/51/6786f55578028ce6d603c969cc8eeedce84019": "39edcc13b34f978ccd2d605add0f76d1",
".git/objects/52/1926cbb44d719c9c9a1e91e57e735de456343c": "d916e1c105837e3ec15052c1e7eeb8d8",
".git/objects/52/9c42e33b93417aac11fe7ecd47c977aedc9a49": "5ffa658029a834902546eb3c1e744d21",
".git/objects/53/59b6001047db5bb4236582987cc25ed9e54b27": "2ec16bada355a3590213e7a75ebfff54",
".git/objects/54/b3bd5e732f48f3f036fb3225e27ed255279172": "4a9b0ef51c9164f4a315cfbed12ac713",
".git/objects/56/e4d055906c05899de2d924ca8b0877df38b6fe": "bce0b670dc23b3532641b1d7947a5b7e",
".git/objects/58/17aa57082c7370104ea3fe0c0497ae8f7017fb": "0683ec79a6f61082553eb04ffb685e63",
".git/objects/5a/1a582943f90c0581d1bb741dbf428ec05dc7db": "7c91ff0d63d7fc46590394858dde6dcf",
".git/objects/5b/d2bf9cdde03cf53af0ed676c5251281db2b08d": "2e4cd32995f014eeee188e734643f06a",
".git/objects/5f/f68244c8176d344b53139e19fbab33d29e0f3c": "39740e0f3ff9a760d4bc14cc4232c751",
".git/objects/60/3770f602c045767a53f99d9d00d2333dd56d99": "5b36664282a159e359f29f74e12ceefd",
".git/objects/61/59b224289d0322c3a8f00bf671243143052f48": "ea5f99cd106db33a80c5a007539e4c93",
".git/objects/62/addfdec5f843224a646a420c07f08091581c09": "586cf5bc59d86205a27cee5d21cc4cd5",
".git/objects/63/247c01b7a11b8f34026cd58f9f26c45af37c8b": "87971cb3d551c541679f25301e27716a",
".git/objects/63/c2e3515d7b0317a2ba845346c6e064f2a6d188": "a62d81855e6a0bcf4bd17226af00bf60",
".git/objects/64/1fb14118f78ce3b002b3abdda03b9698f9e2dc": "ce6779612d7bd2060ae0a57c8e690035",
".git/objects/64/3595fa8deddd1a2fdfd7850df14805bbdd9280": "ba5008d93af78b86f03d331c036a98fe",
".git/objects/67/2f4f94b47d27179fc0bce778d09621fe99fae3": "b105c46ce0def0a490148bb64565292f",
".git/objects/68/e18f5a8a07dc30e9191220700af11412bbaea4": "76eb0aafa7ff8e68b27574a0c75ce368",
".git/objects/69/556460af9319c17fb565f43810a24991b89802": "5ad07eb2ce1268d040c7c6e931b5aee2",
".git/objects/69/cfb6b3947b6f802d18588d2e4764b393d3b814": "6afd6b4af1994bde128712a5293a6e23",
".git/objects/6a/3c3b528fd4578c9fb1efec4a3c610f54fcafb2": "2b79fe36337f1be36108999e04b3ec75",
".git/objects/6a/d96c9437ec4b37bd7656554295613a339e10ee": "a72d3f794490ec7d630f21be85c839af",
".git/objects/6d/72cfbdf748720b3785ea70db0f7b0d03291e75": "08badb7b2773e98c6b6f3e693dec9e1c",
".git/objects/6e/88a5fdf5240212046e28db5208d4604dca25fe": "40341423a8bd9fe744369d3e91d2fce1",
".git/objects/6f/9c2a697d6b9af022c290b9b3aa1d056c84580b": "f79547ad6694cbe03cf4024b0d2d9559",
".git/objects/71/718301fb444b37fb6fbe4709e09fff1877b96c": "19a0733b120801fc641c589bcba6cbac",
".git/objects/72/ca3aedbd6c2b71f61d6cb43d870ff26523a028": "9caf8aa3bbae4297a564b241d0c1c995",
".git/objects/74/e8b7ab9ce000860acc05b022b43ab800047a6e": "bd13f87d3b285d258350c002135d7689",
".git/objects/74/ea42788f5871bab3380e662bd31d96d486a5bb": "4b5a733241131b511868a69dd9f55b56",
".git/objects/75/663ef1d55970eb47fc7f2986e60d8c16b24292": "5621cb5c8e666a61c5bd0da9f840c5ce",
".git/objects/76/19277f8bf503dda439ccda4cccdf7892e57001": "a52a8170d06642f1a1b4b4ad53c69171",
".git/objects/78/3ca3c2baf03fdfc0a5a2a5ef2aebde439c807d": "917b61e89e3c098f64268d7c33425829",
".git/objects/7c/02cfe9ea09b1a398a43e379a141e8491e7d133": "be9e2c790cdfdd5154868ca2f2013615",
".git/objects/7c/b4085313efc95fe32c19b0d4026fe454f73d37": "b382424a2b8e6758493406f16b841303",
".git/objects/7c/e63324a8b2796a239ed2fce06255b5f7cad0a7": "0d686f16734e6746e969442ccd56a934",
".git/objects/7e/84b0fa2cbac51f39e3d1481e8b18aedc18396a": "70b0490d891a60fd2ece79466754707e",
".git/objects/7e/d6c99ca58dd191748ff84ff4f072676d48f44b": "61d6fa919418c9724f3df001fb33e2c5",
".git/objects/82/4c1d9e3fc21a428599144d28ffe0fa7d560056": "b83f67cbade1e8908a7b64bb304ee9f0",
".git/objects/82/c7a6fde89064c797418354897f1aafdbcad182": "e6fa7e67dd7330cb314b728fb890118e",
".git/objects/84/4f513f28bc30b711abe9d62d2f72ae2a069f4e": "270e39ba1d98871cd5ecbd91c1dde0d2",
".git/objects/84/d75b156597698fed4400c95721524ddd401186": "b2c8ed90ee650ae031154bd62d7de3dd",
".git/objects/85/1eed067f7ceb93abc6d8cc6f64459f1c0946fd": "a8513d91eceda817f56159dc32ee42e0",
".git/objects/85/8f19b396b9aaa6185f85485f031c13a195d317": "cc47ba0a157dd797cbfc5d52f55ca614",
".git/objects/86/01642996f889f241c65afc7e6e132b008f2e71": "51c0efdf1266c1b6c9f6091353963e76",
".git/objects/8a/ba9a313e8e3223f469149935f47382afd19d0f": "147bf8d36680288183da14dbefbbf9ba",
".git/objects/8b/1dd295e6916b584485da07f0d4da2f86ad0d20": "aa19db9b17c73cfd15c231ac64d461a6",
".git/objects/8c/0415754a9eb2249afc834c6e4a88e99a23db7d": "5c9d93db4593b220156dc916c46a15d4",
".git/objects/8c/3f70b00c4db7fb2d745800e53a5d1bd8017d81": "17715b51fadbb38b602d59481fbe083e",
".git/objects/8d/669e097ecb17a64adc92ce6ba7c0ba173cd515": "87dd1d1216b8851a5132d99413b6c2f0",
".git/objects/8e/49d9054f6201e1a7041d3f23b1b08b2dd4fe8b": "4e693d9d50354a83e8b79f60d1448900",
".git/objects/8e/8143c4087d5335a9c4bee9217dcd8b31d39835": "8e0a4c38ac74282a6ef17a5d31ed5eb5",
".git/objects/8e/9299be4d3ba1bbeb71912bd72dccaf14035301": "edfc97fe6fa524bde18d0e258dc802ca",
".git/objects/8f/50f6631366e6a1749d0ff23bf41b8821a8bea9": "1e221219cdb735d9f56ece4923abf8e1",
".git/objects/8f/a27dd56368a528d3afda779c3c8eba31b6a153": "0990a2aaca7b3976de60b94ef78d02f1",
".git/objects/91/254686d3b0826178744e4f72aa341212ce43ba": "fa21b68a7d06b2a3346ec77d7472a2ed",
".git/objects/91/937aac036086ba5acde0cff33f93c322b9fa10": "127e863a9a018eec95b28230fec1be73",
".git/objects/91/d07d4ad8e233b39bf5dc964b101a5badfc057d": "3a69a3034c910771df7c0d5e42d2e69f",
".git/objects/91/e33522890819c4c28c554b86911ca9eb8bafe0": "c1a08d66249cb3e54e7abe6094eb3ac3",
".git/objects/92/7b11d241d811cdf9720a7f981db8ea2c324435": "901eda066e7c993d100a54ede3b489bf",
".git/objects/94/c1950bdd00a3c6882a0225b1f6fd442492aa08": "2dc72474fdd989c93def5dcb1e1c0497",
".git/objects/94/e93583653daa064ba5125c669deb0a91976b5f": "08209b76514d89fb0dfbe79826d875aa",
".git/objects/96/3f559c783add0f8ba8e1985ccb18e8e85872df": "9a7f7cd3b281b4ce7942512d7a1dba57",
".git/objects/96/6dca637b925f9484b3354e18a444f4dc061ecf": "26c1999618fe52ea2cc4b4d7f6e2a494",
".git/objects/96/a54c8b47c360831299482a3e22047085f2bb73": "143cbecf2bdada4a665efae14447be24",
".git/objects/97/bb7baa309e0b03ed95453c8e5c070bbc6b00b5": "8ba700d89dfa80bd3b79e15d7f755cc7",
".git/objects/99/05d56c2a5447a1244d3f9508adb41b7ff2fbeb": "a5a1cdac5db46206c67809c4ddd5f42a",
".git/objects/9b/fb765e6e215340c632ce568016c5e0eddbb75c": "a1ecf356e5f27bc1e13f40c0525ed54b",
".git/objects/9d/925eb5edf18ab0af2f55c88ee0c922d4e3ed5e": "3b5eb730d8bab52bfdf6ab0bb45b666a",
".git/objects/9d/eb159a0edc6dfd16a271e726bc8887f34fe73c": "b674ea511df0b2670a6280163f136510",
".git/objects/9e/2cb96e6def6cd4405ea445d922226e93f4e075": "fa802179321876a8fce171ba396cd15b",
".git/objects/9e/9574b972d22abf55dc87ce54d86fa07c2c673e": "f7529a5bbea4ea9b7ea07303559a4300",
".git/objects/a1/9d72aee3320fd9d004766fdc0bd8b841f17331": "d9d344c025a9f893a3d149287656e3ec",
".git/objects/a3/4356c62f818c9ca55bee8a2fbf7460ffaf00bc": "d06a88e580c0544e045b288fb732d4fa",
".git/objects/a3/80c3687645339f54b4fb52a2f7644c23f0e4bb": "e0dbbd19ca4c126e29ccb3bd6da5efb2",
".git/objects/a3/8215bc0f7711fba205020904fa645f21ca5d4a": "8b2576f2b80379f118bb90094159150c",
".git/objects/a3/e54216dff6a1f8c05935ccf098d11b8af5201c": "c972a1a4a1c3a0f39d159cc6637e132a",
".git/objects/a6/3f7ba46e411f59cf5f4fcd10fea22959602ea3": "d8926646b95448914153026b839712d1",
".git/objects/a9/cb911b73a8860c137e5a05015ece8955bbe997": "c54e6908fd3db66e5cf1f8bd594617e5",
".git/objects/a9/ff9b404a5974d600d183c1e8fd1ed667ebeb77": "cce1463abd43626e1cf67d50144030b9",
".git/objects/aa/179a3cc72a8ac6811271d6aaf9ff6d9d74ba84": "428303d578c073a7f876e0ec8b75e55d",
".git/objects/ab/b7dcc16a6b7e1568e7d061545375d0f72a8ef4": "519d92d5d575386954730375ee7957a3",
".git/objects/ac/97ede31108381022889fae4b7045871331139f": "e54adc144db0dbbba6e40bf9aeb33eaa",
".git/objects/af/c15a6b0fb7bc3576b3822583de5a26446a547f": "594dac2c1b26aba8bcafb2114dd34ab0",
".git/objects/b0/11985ad394381879d58b0fb4b108d3334bfe94": "c2408aaacca4fa174a4ea3212b889beb",
".git/objects/b1/6e01dcdeafe0d89c2cc67006b56d8b8c9425bf": "bd07cd96b1358eb7981c720e27e0246f",
".git/objects/b1/8c224f561c67310ffb080fd24e6fa3caec9874": "7135aed9bbd0608ac4c2a003a0f91b1a",
".git/objects/b1/a259bc3218838055d6e960f88aba3e0ff3cf3d": "afa60d8451bad4caf725c4aebe173e40",
".git/objects/b3/c07e33854de3bafe60d096603e3d23077a7a60": "3657b744126306e289efd99e572d65a7",
".git/objects/b4/9eb61c250ed9be34e3012f40c94af2467316c8": "ce951174ac40ae8ee8eb35c742a5e852",
".git/objects/b4/bcd7da2c2495ed84520f018b5f887f1eafcef7": "f34b1c85ec2eb7c44e0447b0e861e2da",
".git/objects/b4/c7be7eca2e2ed38316b7f2ce5d2e603e92b0f1": "809f6963c98fa89d335385447297ce74",
".git/objects/b7/f5f64febe438c492662f860c3d323911efe7b1": "4041baed8370000bbb8f38f3acd6d760",
".git/objects/b8/677514c0311659add22c9be4742f376586edda": "4edd09f66f97bdbd1aec7f7aaa7002b7",
".git/objects/b8/ad05ecf56c6947448fad914b44fa8aa9cafb2a": "55ecd53e7bc7241608804e0ad6652988",
".git/objects/b8/b6e20f5d2e95a324c18f7cb2302007046a2ac2": "bf3b403fb3300ed4baf556f092672c73",
".git/objects/b8/c44177ce7126becd67eeb55aa256bff3286eab": "b1aff123241298f4e32af0dcdc4b9155",
".git/objects/b9/068468c06aa218ef81212dc5b5c34bc7dd33e0": "17e9b9178f6395a08acc1a7c5c6638ff",
".git/objects/bc/cf4a577626162d75ac72028bfae5b2897265b9": "ca26d7c04057ac51f1109499caf6293e",
".git/objects/bd/060de48aa79d4c71ee2b61cd26976d63323da2": "3bf6bfcca1cfb673a7341124ae4e647d",
".git/objects/bd/8eb71ee990485e786be81e530054c3ede646ce": "26c809f6823fa4ee51da2acaae496303",
".git/objects/be/b37fa4ce5d3079a6154ce7fb010df2f7cf5560": "0d285258fe5465fc9baef02f0e4ae08c",
".git/objects/be/f06fb65da7d973be9eb190c13e139e5e13c7f7": "cebb8f9f34c8d8a8112a324d8eae045d",
".git/objects/bf/04981fd97c279d5bdb09b8c718fe341dda068a": "926393aa3941ffef3786fa135abd02b0",
".git/objects/c0/5253b95022f6560578f07a6d768f5974461ee2": "acd60ddacff51194dbfade3ab652a197",
".git/objects/c1/12ba78bc95ffeb5b4339996fcb03bdcc4fcbd2": "1f2dda205f0cd15ad391776fe5d77aed",
".git/objects/c4/df4ec56b333c1a973d484a5e82037db1fb092d": "a4d5bc6b73e98832660e75c719d18e65",
".git/objects/c5/d9a901c91fc3128fc231121f16338f00229491": "197829419a4ac8f0345a26be3eeb4229",
".git/objects/c6/bacbcd0c786d4b454f5feb6c958aab727365a9": "11d6bcc4c55be99b9c2abb5d4ccfb5a4",
".git/objects/ca/9983ee6b703013c2651ad3b0d9509432ac34fe": "045854b9c22bcb782858d1ccf11bbb0f",
".git/objects/cb/709f72a3b408297248a681495b1fbd3cb92ec7": "d6369378f0611cde579ab8cd68c2a1ab",
".git/objects/cb/d791a24e6207763ec4dfcd190b6b0764504394": "dc7bcf6505fbef9b90e3ec2f5347095e",
".git/objects/cd/01a116b8c4b36fa00ec191f5e48779e4b2370e": "4a417bc5c9f18c4230973594430e81a9",
".git/objects/cd/5c85312d299ac970be71a5a744af92cb6e612b": "914163ed5db4f2f69778cc36484abcb7",
".git/objects/ce/b4995406f712e0b6af14c2654405c1cc3dc7cd": "47ce5fa82ec2fdb7d45652108dd1754e",
".git/objects/d0/7788f273a08168f43a9c93bb5e83c5fdb94988": "790b3daf04d58a76abbe35f2777e4aba",
".git/objects/d1/1f4a049a607aae1d7206b39328772393b608b3": "54fc397bba24236a872fb70a37bd237c",
".git/objects/d1/3262c26356d3e58a1ac88e6179e3921a64549f": "bb8ec15c7d6be531f878aa93ddba6bed",
".git/objects/d4/59cae9b2115dbb81f793b924c61cc84866c5b1": "710ba184121e0c0611671a3897f6d472",
".git/objects/d4/f7f85ac1ce3d0c4647753097403ce1c926a7cd": "000974d737416ad1c3efc2450076d4ec",
".git/objects/d6/a3ab52e77f06c648955f1c0dbc8e26737ba9cf": "481b6f1c916bf782404bf394dbb9db91",
".git/objects/d7/01deae0d26a7a4ffe2fbd679ff297569b77584": "cf91b579846266d4b7ac3f014ec6496a",
".git/objects/d7/72387f1c014734ff069fe83f7a23ac9ebff913": "a6d82043e90120597ed2b221d4fa47c3",
".git/objects/d8/5c2f7e6f86916b8da48fc4677f89a4cfbc87ba": "39755804188dca6b5e843c2f19680ee7",
".git/objects/db/8630d4450b32164d7b4ddd40c294db1a1badb8": "15320edf764f9cb65029100e8370229a",
".git/objects/dd/671f4692f53aeb12cf2aa171ae884e3ae5d134": "54680f76f2691eb83243e276f8947fb2",
".git/objects/dd/f3edb9d4b61ce7579dd39b7ea6fecf52ecfb60": "15129ad7dd212bc676aec4f4339a5942",
".git/objects/de/6760aa27fb1a27656090abc2693b8db684cab5": "9a018c57ee13a33174359570daa90c50",
".git/objects/de/6918f5af1b023479d49b82d63eaac5f133ad8c": "46f5a9642e2df810f7e8b1d638dee399",
".git/objects/e0/cf1c07179d3f8a3607b2f3f8194077853de2b9": "31edbdb309fdd956790083eb4b76495c",
".git/objects/e0/f18a7d0be66ac046c325386d2991911676bffc": "5f3147f64477cec8063f46a3d2f19578",
".git/objects/e0/fb3b1ec104c358f6684c99a64fc9fcbd4eb9e5": "a5400bf8e426a8adc860441bfd473078",
".git/objects/e1/60f91cd83fc820294a14fceff9efc0f702564b": "525c624cc16c6efd702d03126aaacc81",
".git/objects/e1/e5ad28a8ee97ced357ba2e789bd9a370fbb1bb": "6637f0fc8786f861c20b0b5c9f28828b",
".git/objects/e3/52aa5fe387397caeea9d70053c04242840cc9c": "29a280006c6d2067a508df2b3e9647a2",
".git/objects/e5/65ce36b30b03ed252f662f3e709c040ecd7eec": "7ad5db21da0f52b261028485105fdd81",
".git/objects/e6/3587d6dd669462f6c8c711417fb9c93617f500": "599f57e470cc598c77106f4c1bfc3cf4",
".git/objects/e7/1d592ea0e736503c78ce4d027efc55ae17f3b1": "a27b565c6e0ed2f4453283068eaf2476",
".git/objects/e8/3b3913bbbb9f0a49bf0acb2aa18ae3577214b9": "9d6cf4a222de82654cafed69015f52c2",
".git/objects/e8/bcd356bdb78c850269e6cc55d5183a97e5fc3b": "f2c018b25aa5033eae54e461150205c9",
".git/objects/e9/7455cf16257814954887cc09e98a7e490162c9": "0f21b57fea1724fb734817483cec564e",
".git/objects/ea/24639d49f1c765abf5640c4ac2939af67917cf": "87af0909c50d77f6a61d4183f1ee8776",
".git/objects/eb/a8d398bc0ab714cc88e79feffd839590d46e9f": "a2a5b1869ef30b499bc5776606992918",
".git/objects/ec/5cdab599e6f273b7dccd95600c225c5b79e444": "36b2632709ae5f679a6bd23bc034888d",
".git/objects/ed/8f174adb7d2907ea87164a8c0367126489f41d": "fe7792c8c19ba83f4577e481d101a3ee",
".git/objects/ed/b6d05c63e03472fb738a94c619c05f125b8ffc": "2b312c08301cbf64c254cf2e04aa899b",
".git/objects/ee/009a93255a729b0a477f8f401c4cc1318fa133": "826255d5cea3739cd6f4bb8fd1402fec",
".git/objects/ee/4f02a804542972695f07871ad3354597d7ec57": "e73cedab5609e691aadd4a19b7976f1b",
".git/objects/ee/6a66c2b8bbc434cbae607b86fcd1e2af3c531e": "53cc3d7a77d91307902ab6de7d45cdb2",
".git/objects/f0/65c7c1397982e43e4988923b4843715fc14419": "6d4932d787efe14c8a6e9142409a01bd",
".git/objects/f2/6e213c1c78a98b5d72f33e131e934c2e07d549": "3a74a9af2a0408181bb9256ec1e5f3b8",
".git/objects/f2/b8b5c3623e9063a12093b292313bd7db626306": "ae56985844e57d9911364e49a96399d4",
".git/objects/f4/4f008833c1f8969b2badfe6d1a7c7ec4b7a68b": "8c1eae44153eeb14d5f033f5dfdc8056",
".git/objects/f4/f9adb0bed618332261bc05e5ecdf2c35385dc2": "fcb46101a92a5192109ec5d96cbd1797",
".git/objects/f6/f18274f27b8f5888a384dc16783d4edc41204e": "129a7da58f4646baa9939f95d298d569",
".git/objects/f8/a5982d929f8ecaa1e1542bc15b2ecf9f46d175": "cf429a72f2b8439681498e003d665e0e",
".git/objects/f8/cd98e1feec30e6bc05c60515652a421db4a57c": "3144d8947c4ea53204f682d3a455eb84",
".git/objects/f9/a516238fef0c299d0ddaa45b014ced4459a2d2": "3d4ad7f0a81ec67d257a57bcba73a792",
".git/objects/f9/cf7517475c4681f4d919cbf58edd8be91b904e": "2b97011e166d9faaf0ee203c8131da04",
".git/objects/fc/e4773f59fa6dcaa82743c30df403e02918d97a": "096188906bf17db9bcc7b3a5fa04723e",
".git/objects/fe/090d9b29b89b10000a50db64db0c4365939e63": "f47ec583fa163b6cb8e28241231cde67",
".git/objects/pack/pack-8cf2095829dca3def77a2821ade04763d6f1850f.idx": "3a39857363d80a1d0a1035d952d75a79",
".git/objects/pack/pack-8cf2095829dca3def77a2821ade04763d6f1850f.pack": "85454bdfab0cbfe835c13c06bcd02d1c",
".git/objects/pack/pack-8cf2095829dca3def77a2821ade04763d6f1850f.rev": "6e9c4c399c35070146141d2212bc8284",
".git/ORIG_HEAD": "914585ecbc3a9d3fdea3138420d80453",
".git/packed-refs": "114e5605f4a858ab3a1da2056400ee53",
".git/refs/heads/main": "aa89a4033b44ac0e9879162d609403b8",
".git/refs/heads/master": "2ec1a88bee102273a293cc830ddfb8e2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "aa89a4033b44ac0e9879162d609403b8",
".git/refs/stash": "d1517d152443aa3d462177e9229f39e6",
"assets/AssetManifest.bin": "9c28a76c316da02d19c5375a12db0436",
"assets/AssetManifest.json": "64b86b2f5931dace570b2ad83a7e4c3c",
"assets/assets/about-atique.png": "1195c436cb81ba93e3d463a2bf93f7bb",
"assets/assets/about-bg-mob.png": "02e95843ba218c730b1d39ea2e187401",
"assets/assets/about-img.png": "f5b0e4ea7c9d942f9f266077cad3b5e3",
"assets/assets/background.jpg": "bd7a033186f313582ffd01965c58aab0",
"assets/assets/background.webp": "621389d524e441a85db701d2206c632a",
"assets/assets/herbal2.jpeg": "6c18f01d3d2a6c6fe9a8f9ed4f722278",
"assets/assets/herbal2.webp": "112f908014bdaacb1f0d7b1b70cdfc06",
"assets/assets/home-pattern.png": "7283c5b81af035445dd0df4bc59687ea",
"assets/assets/home_pattern.png": "2418f5b61305d06318656f89fb1067a5",
"assets/assets/mobile-background.png": "e7ff4caa5354209e3613b2a9b9e42418",
"assets/assets/mobile-background.webp": "2e313fc4bdd12aaa0f5717f7a39debdb",
"assets/assets/mobile-home-pattern.png": "6b8e7335ac01964835b7a1eef51fcde3",
"assets/assets/pranic-healing-image.jpg": "058bb75434c668ac4532df8d656a7fb9",
"assets/assets/pranic-healing-image.webp": "4bab8b857db5e18315baf905c242b144",
"assets/assets/RAYS%2520Logo.png": "22b7288c77643bd4f393c3b42f223b9e",
"assets/assets/RAYS%2520Logo.webp": "709c102f54548582225a9722e1df8d71",
"assets/assets/RAYS-ONLY-LOGO.png": "3a98f3cfaf4f60865a2015931d31688d",
"assets/assets/work-bg-mob.png": "5d8d58e2ddb034b98a872946c4889fe6",
"assets/assets/work-bg-mob.webp": "a0d1cc32912b871b987f20998c0e7760",
"assets/assets/work-bg.png": "7e48e275efebc3bfbaef1f78e8923a82",
"assets/assets/work-bg.webp": "20968d489de85c9b97b3b2b1a3984484",
"assets/assets/work-imgs.png": "aa93dca520057cd0c48bec73b32ad2a2",
"assets/assets/work-imgs.webp": "5c8d4761b18c4fcd074f8193c9cdfdbf",
"assets/FontManifest.json": "9022a696e0c92517ec2b489f89569e6f",
"assets/fonts/MaterialIcons-Regular.otf": "2fe6d637615d6f0728830da633774e20",
"assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "48d26953121df06b58ce6d0a7baaecad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"CNAME": "028bfc9aaf992c8ccebf6e0de5fa2619",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ec2cbc1f7032734e42b42da757e35e2",
"/": "9ec2cbc1f7032734e42b42da757e35e2",
"main.dart.js": "218abcb9c48e056bf80c3446c91d16c3",
"manifest.json": "152fd644b695992de595cfb41411fdb7",
"version.json": "f9168861a6debe4fb1281677487ca2d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
