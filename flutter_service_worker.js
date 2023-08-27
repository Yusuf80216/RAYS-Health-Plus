'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "75907d8592cfc66fc06bc641f7dbeb65",
".git/config": "a065a5a3388bc2f2de4c1136e89cff1d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b5c369311b11d949ff9995cbfb2c2a62",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3350caf2d137bcf767cae2a1baa1ef98",
".git/logs/refs/heads/main": "3350caf2d137bcf767cae2a1baa1ef98",
".git/logs/refs/remotes/origin/main": "5d96bb3206eb05c8acba57fea215d1f8",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/04/1a3855474575f3224e068641f65d9623220a8a": "2d9c42ba702acf1be7fa2fb1de56e2b2",
".git/objects/04/67bf12aa4d28f374bb26596605a46dcbb3e7c8": "49dba9cdefacac2602a7af98a656e661",
".git/objects/05/79914241c3cb28836edd11ef2bf2fbcdd79b74": "92042366e582669fabfa1ad8f8e2f55b",
".git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "cb6848767aab99a89a4ec04efbc00625",
".git/objects/07/4777ef37e075fb035a64660a2b3841b565cdb4": "9e13dfe68d804d546a4eded234abd87c",
".git/objects/09/7f67a48bdcbc3f186bbcbe39f828e051c67f54": "94ec93a929a22f7bd3f52008499434fe",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/3f5fa40fb3d1e0710331a48de5d256da3f275d": "15924b1217c401aba33f13069f7d81d5",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0d/8b3d9df014dc1f9666ccba900b9a3577bd25e2": "bcce8ebd4fa13da602c321b62b4bc221",
".git/objects/0e/c303439225b78712f49115768196d8d76f6790": "383f775ddf0900dd9fe74e867c012ba4",
".git/objects/0f/b41f98da69c5fda80480b9adae28986b624358": "267e2a704a8bb887e8d850d83bbe6502",
".git/objects/10/be2d6a44ef7cf8a45080722b523915e06ef6bf": "52c45305869ee8b342c31778a866877f",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/13/b35eba55c6dabc3aac36f33d859266c18fa0d0": "ccb5b80ef3b4fb1030a8a4f520f3f5e8",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e4ec6dc130aa1e602c1ade5ffe47a7bfcdb300": "9b25c7f08f565373aaeca35cb6f39965",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/c45040d88a7b4e09a8e052941ff6857c68ffc1": "144b07d6ac243bdf9b741dad37f16529",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/1b/81c3628a82b012ca295b1d483986d05d1ccd78": "32376227efbe5be6907fa3e2c68af60b",
".git/objects/1c/b48f1cfdd7cdca352de3cade16e97c48c0be76": "93d502c1bcc836f88feb77a6373fac85",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/21/08d5d869713db4c62710e3c92577e4d281cd7f": "fa737c315c018c3a4f37a463e72394d4",
".git/objects/22/c4462b79288fe10768cc571a36732ce5726025": "3e3cf5fc8864e978934ad77759390731",
".git/objects/23/248418d819304baca0a96179b45a6d9cf2bfeb": "3446f37b0273d353b5eb62b9c06128f7",
".git/objects/24/476c5d1eb55824c76d8b01a3965f94abad1ef8": "272edacb42df12790f46462d08bc4696",
".git/objects/24/bdc03f7601be460c4e75313e33d638cbf1ee23": "3dfedde9f617ffd9daa7990388b62544",
".git/objects/27/22837ec9181c3c1b2f1c1298870185c03ba354": "55274092f8c707defc529cc6940e63ee",
".git/objects/2d/9a851f5ac55efa16d11e2ec3ed43ff1a635d6b": "a88647cb19640cb19f5028c65656c50d",
".git/objects/2f/1632cfddf3d9dade342351e627a0a75609fb46": "eebc09df6f2f2370e95a1eb0bc1fb2c5",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/31/7ab071b46163dc4b90292f7b99df54e624b153": "a099bb22cf834d3e26159e487e1a80d6",
".git/objects/32/1773cd857a8a0f0c9c7d3dc3f5ff4fb298dc10": "aa6f1636c8ce237c3c416d222abf03da",
".git/objects/32/6c0e72c9d820600887813b3b98d0dd69c5d4e8": "3030e2c76fcd41356672eee54ca3bd94",
".git/objects/34/7139c48727d4f32a2b9bac862fb4793356cc63": "f12c4e44afc2ef65f4df0d401fdf25b5",
".git/objects/34/b7f6e57a91e3a8c70353a164a343a2031b8293": "1e0244deba4f01ca9852be47bb1c164f",
".git/objects/36/b0fd9464f45b33f482e64bea579787e142affa": "9d308f3efbc512e2b01277fb7565acef",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
".git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "bbdd537b090d83597a791f77deacff5c",
".git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
".git/objects/3b/33c3b0d3aab891167e61dd141c4aef55cd2dab": "2a051de8c24281623ce7ca37ce6e49f7",
".git/objects/3c/472b99c6f3501ff93513bcdf39dabe4f236a55": "f1663221d4180a0bffd3a0a98ec3b762",
".git/objects/3d/532f62c3a145586577decaaa3284b7753d5a96": "cad022bb65fee05bcae768a7820b37d3",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/3f/f249440d41ed5598184a13a8ed48256e9a6771": "40467edcce9996ec6298d104d54caa55",
".git/objects/41/1ef17c531ab162d4a5867a94a1065142dacb67": "75ad594af9bdb0987c866b43226345f0",
".git/objects/42/bcbf4780b187e80025b7917058bcb882012aa1": "d13c60a94845ee93e5124ec90980bb48",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/46/acc6ec27315f2bbfe5c39abdea26a69feb57ca": "7c6c9c24761d97878da691599e7de3f0",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/47/89daa6a443eefa7f3f729164a18351e06e9800": "3c2dcd6a17cdfc0957293d41ef712d24",
".git/objects/4a/b21deb883778b08e60fd21f6d787c95b41b562": "082b2801301262858318a9ce68f596f8",
".git/objects/4c/d7b0099ca80c806f8fe495613e8d6c69460d76": "171b7f459d8f957102dab0e55cc51039",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4d/a8dc047e1887fbbf955d35fd47fb8c8a776fa1": "07fbd662cf8fa4d61727c673bba9ae99",
".git/objects/4f/7884874da74281c7ffe7fa4b936e7b2af92c24": "8a1caa4f3fe1a49906a36e56b210cd33",
".git/objects/50/2f463a9bc882b461c96aadf492d1729e49e725": "b4ba046789856764dffa013b321284b3",
".git/objects/55/bb9b5ac6c7784c2a4b362b90962f9e4461a082": "66b08ac2ae5eea549f9868d82c996a5a",
".git/objects/57/62b4020edcf009da1a27daace844f2c8a7decc": "68fdc90e6ba37e34ee7f137e0a3a8df7",
".git/objects/58/a8c74b1474314872720da1c0de0d755ccb3a59": "51a28df1c4c02557494c5900590fe573",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "3f57df6a0c0d74a105194c1575657bd0",
".git/objects/5d/5c45d904efb12a5d82a5a6dc6878e86485bea6": "e19d80d0bcfc805cf7a316474ce7b79b",
".git/objects/61/b6c4de17c96863d24279f06b85e01b6ebbdb34": "5486bd6a506a32f8c081890c2befb8eb",
".git/objects/64/019088b35dee587a75505036d68d213872911a": "efc7461ccf06fd3f04e60f24ccbcffe4",
".git/objects/64/38e0f6e4459f37300128b173df4a3be939bfe1": "703b9ccf758f1fdd52ef491f0bf648a4",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/69/48cfc7703986c4f7139537c2198bc5fd8c0264": "23418cae39afa4aa1dd585e3c84eb68f",
".git/objects/6b/a0b23fe3d70886d310b8f8db2a9fe7f1d9d533": "0689864ae5c053e6566781f87e54768e",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
".git/objects/6e/d2d933e1120817fe9182483a228007b18ab6ae": "e67768e46e6cb02c375dcbe6443df2e5",
".git/objects/6f/568019d3c69d4966bb5a0f759980a1472afc1e": "11711ec452167a523e427fab835abd15",
".git/objects/70/671da542f2c10895bded412c3522b5564667c5": "f7782305369361a72c2286f00b5ba710",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/70/ec2c6b039082a4b1a6ce0a9d0f83ae3bb31b97": "9277541da46aa484dfe01bb3f3e53378",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/73/53c41ecf9ca08017312dc233d9830079b50717": "32c4c29220bb05d460a969e7df99412c",
".git/objects/74/329496ca3e6af8da55d46eeff2e1055185f82a": "c9d247025fafa18345a80437824c208c",
".git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/75/1b9daef79af2dd587b9cdb423b945ac80f6ab6": "d968ec3924e6473aa7e4456d1ef20d7f",
".git/objects/75/b96c3ea9cc3c9186e4260debaf8a58bc1ebd96": "9249a32ab7430fad63fd6e345277f068",
".git/objects/76/df3b565672e3248a5715339d092d4cb6c75019": "8b085dbca3644bbc0190b35c6d2dffe4",
".git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
".git/objects/77/b5bb61cc9fa8729e3e7ce1eb4dcf0f331fff66": "acb5d48948b74ca6d6bd99161b71c5d8",
".git/objects/79/7d452e458972bab9d994556c8305db4c827017": "009f1a67118a52459bbc67f56c2ffd4a",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/7c/0f2d7f214eb4583c67d3e74046f1a8448233d4": "021d081eecf3410cb9f4cf595b518deb",
".git/objects/7d/412892bf0e477bec8435a10087ddff77dd513a": "a6e6ab7176f7d3ac62b259a6853de991",
".git/objects/7f/9d20801172a149045d2147c3fc5fa3aa92b641": "26b9083bd7f0f6ed808ad1d33917b95e",
".git/objects/80/e867a4e06b4dc26d0a2b327cbd54041addc50a": "a256672b7db051545b2b39eb821c1510",
".git/objects/81/fc8a41f91202714581ad3908e9f0c01540e08d": "a2a7a7bc395c779e6bfb9d5617ffe569",
".git/objects/82/36f5728c63e5c23669d097ca1aa74d0058a88b": "68e08df1b04fc72bbb0d69d2d2aed58f",
".git/objects/82/b6f9d9a33e198f5747104729e1fcef999772a5": "32d0349a1626c50624f6aab0900c31d8",
".git/objects/84/ac32ae7d989f82d5e46a60405adcc8279e8001": "a7755246641eb6f0ea897123c42e7eeb",
".git/objects/85/2fa1a4728ae4789e3bca55dd07caef3b41f2a5": "97bf964ac33d3f622d940921761e740c",
".git/objects/85/389608cdd05c12ead9835c6f1d36c27ccfbe36": "0ddd3384c3df0ff76364ca5d7fb9d2b2",
".git/objects/88/b22e5c775e5e83b1bb9140b0d1c0c38c2871a0": "11f6f26b227c21fc729a3cf09ce66310",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/89/53cba09064923c5daf2d37e7c3c836ccdd794b": "41d25b277c37a913abe0083c22f1e1b2",
".git/objects/89/95b51c02df24814b5442a615a4a5fb7a6db625": "9e8f0c3af76df087a01e251c6ba2e3da",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f96a2c8ade099adb3fca57791d512ff901fc4a": "d25ee2521973bcf7a4fc7ba6e7142677",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
".git/objects/8d/99b9567ad853f8db51747d6fa31336c57bc994": "d8fdea388d2ed1e1a32c3bdeeb56aa0a",
".git/objects/8f/1f760b1053c027eec8d137ca098944ec477abd": "8f3b31fd794083c04e72abb9b977191e",
".git/objects/90/d3a66d1f42bb6c69847611f3abcd87da7e7c5c": "3a2a8516904ac710fa7c167b474c3d23",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/92/4ba3b301e1b1d4519d08f86d472f74402df91c": "7ce39b76f003ead9c2fe06c5e196e4d2",
".git/objects/92/e310d871724c40345d6cc39c683cd7915e2b55": "0d1c0fe8808e8a373a7a8ea009a33621",
".git/objects/93/0d2071a324ee6050cccd87a14495557b63416f": "27184823c9e5055a30e98ccf70968672",
".git/objects/93/ce51bc44ec670ea8aa12274d5d8ed5db62d6f4": "efc3f526a69f58955bd1a73487714956",
".git/objects/94/9bae10d94b4bc6399fbd61a50c2bb64eae7cc5": "b0056cda5b6f431118583634b642b897",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/96/25e105df39e8429814f3189a8015087720cba1": "dc4647a7fac13cea763bcd9ca601edf5",
".git/objects/97/7ab475b36e6998157301c7ce6203854e93db40": "1d584ccc0a7cc06c0bb7166fd43466bc",
".git/objects/99/1347c6b61b62a6dcee5cd0879203b81dc982d9": "b1fe8d9d67205b114a480835c4ee575f",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/9d/ceddb25368a0f7bb27194f9419624a0dd71dfe": "c5546fa40ff152722a19dc51b3082666",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a2/ec33f19f110ebff51a23342d7bc29ec9a1aaa6": "48569d95657b1f4b8fad6b6e730d4334",
".git/objects/a4/2ea7687cb67e55af955dc8874a072e087ce3ed": "b51e31b93bc1bfcb23a9226ab3e3c5eb",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a6/abd734f0e2abaca73fab6112c05f2129c0809d": "77ee2b163ad2d9fe4e73836a19e414a0",
".git/objects/a8/7eef84a5d29844f41176f808a797cea593616b": "bbe3fc3e1c5e6135804ae185063dc396",
".git/objects/ae/1a4f20cc7dd07d3218da1a4ea0299d0af5b5b2": "e4fd9f5cf98f0ac672fbf905d42e30c1",
".git/objects/af/17b116b7824f8087875629c5076abda52ac4bd": "f0138f7b44200cb2f3f8ce28da9d4744",
".git/objects/b0/10e847037dd96352ef0c898a4c99bee8c034ce": "4eb6e4c0e3251595bab19eb0fd98ee44",
".git/objects/b0/cc87c40b26a2e302e1e1ded48b42ea618bccf7": "d0ce8268e8e5039eb245d21d696a5bb3",
".git/objects/b2/5e363efa423f6d2dd97d425eb0f1364dbcbe3e": "2820837aa1faa39ed5cf46ba48151ff4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/bc94b99315c3a47070438dc4f5ec4a0bd6fe74": "ea90747018cc69839e1fd54fb54ba602",
".git/objects/b8/48d922a1fbfbc06359bb8074f95c905d16ffd0": "500d89daeb886beea8d771166a4b8aab",
".git/objects/b8/ff43383ce5f52924007825e27feea84550c36c": "e010265d0ac4e63050e19ebd43fdbe32",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/f3d77f76706dbc82162dd6bc9a1365ac5be830": "3fdbb77ecc95ce55cfcedebbe781f150",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bd/b57226d5f2bd20f11934f4903f16459cf52379": "3289c6c0ee8813484d2b33d6c6e1df10",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/be/dbe53586b2177b8679fe8ea641be304c0623fe": "4055f40432ef0bef97db31c60ea50510",
".git/objects/bf/a98e0ac295a8aea78907e81cd8699b642e75e6": "501fd57b9ad2e5e2854125767d75c9a0",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
".git/objects/c2/efd0b608ba84712fb3e1d01122468a50c7fba1": "5841aa09610800cbb88a643fdc9ede63",
".git/objects/c4/3cc9b8ba4e4ae5c6df5ed5e3f199668b7fead0": "e70044978ca80324fbe375a7e1547ad3",
".git/objects/c8/6632d8a6b9c87253eb597d2607460abf793ad3": "182503991567a1d1b9904639ae7e6b4b",
".git/objects/c8/7d15a335208541da7c11961b0f6d5f6035512e": "a6105aabe7a3384131da4bf043c5878b",
".git/objects/ca/a269cf4c72fd3dea88ba0fad48991fc9f2735f": "ee8eb55f05a1c9cdbaf0f135bdacb9ab",
".git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "06da19129aec844c2a975f2175eb659b",
".git/objects/cc/576f888a925fb53bbeb37cac70a0951471cfc0": "bdc50735e35a2750b2d998c9114fa618",
".git/objects/cd/8176187ea12c402c9e746572a0984419b5fce5": "d1a38fc4c2e97d27e24987e0d13ddc07",
".git/objects/d0/651fda5fbc1e0e728fe38d2abc65f7250c177d": "6bc02ac128f6ce47d177770d0a6103f8",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d4/78e81d3612a072335a8e0a1e4da1405ca5b6bf": "1bd0c981d02405bf112af8b3f1e34745",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/d5/3ef6437726b9d1558eda97582804175c0010a2": "764cc945f02614c5bb082a403a0c55e0",
".git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "b52bbb3aa77140bdf2d47814158cba7d",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/d9/419b3c024a7e1a9551bd26482c2bad94fec32e": "20a17bd1ed6b1de2a5f9aed6ae26ed61",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dd/689962cdb93430170e08b3afd133fef6c1c6a5": "61dd4d7ef5bcf3ad337e774f13ce207d",
".git/objects/dd/db8a30c851e7ef5b16a9108934bd1217b6b43f": "e943b985c0fbc94ad354f2ada89b854d",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/df/bd932fe571b0140c7bd1afe406f077afa44adf": "fb876b9e9eccef9a8fd57c6222e3513c",
".git/objects/df/f4f49561c816f70eaea557d889d31cf63447ac": "fccf1f0ce075ef8d3a1ae932cbc31552",
".git/objects/e0/24a387146b78481e80180082b4bf6464e92695": "293cea82787a0d2f94b47c999bd02798",
".git/objects/e0/d16fe56d6f12c217719dc2cd75545f44bfc973": "a45752aa781f95b86fe59cbf6f08ee9c",
".git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "5ef61d56b6220833037adc3dc3871ecb",
".git/objects/e1/3d8ab23c3451f8fe4c8de9fad41507fff3b3ab": "68d129ffc31379029c18608ccba7eea2",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/e3/0296c6abc7989063671c7e6ec8cc4c194d988f": "08649d4e800f15c5544f7c83214d0774",
".git/objects/e3/3142e71bfc751ce1d7a7d46406235425786005": "71cc9d64983f89c56658f9ade44a4809",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e7/06e2cfe683fc714652f2372bcd465a9bda0a50": "0fb9a8d4bbb594b7d8d93c04bc705bd8",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
".git/objects/e9/285e475ac6c286701c263d0d18347d1c796eb0": "32ea654f6926e2b5723251da43660a74",
".git/objects/e9/f5fea27c705180eb716271f41b582e76dcbd90": "45a0061e76512ff597b88e29748f3ada",
".git/objects/ea/11f76671b7b380042643ad87ef127b361aaf80": "ad11b491d52b218f2194f4e934dbbc2a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/9af2ff5cf24788c1c7c232c0c948d90e00c704": "2c732dc7c2b06cd887799f4e1803d70c",
".git/objects/ee/0783630b5eb05738132ceb487d039ce0144ed1": "59d7a5ca56fda09c8d275141ed2069c4",
".git/objects/ee/a06b9313c89136b5bdcf94155e7661600adf47": "eb34a69abb96833990c71ecb8feb7048",
".git/objects/ef/418fe76a6ec8ef9b21a5484d449409e2249f65": "7d3194500e0b9055558db650af63da2e",
".git/objects/f0/83318e09ca1b6b8484b1694a149f0c5d5cac1d": "541f4960a70ea9c895b2c21196ef40a7",
".git/objects/f1/6b4c34213acd9dbc719b4548786853e6e9503b": "152df85019e8b7b2580c77fc34d7f4ca",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/18a887d65316af1109f9c1a03022edbe158c5b": "e8d4651aea410aeb5498834099a1ed0a",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f4/0847d1b89d6420017a13340ba6730b7bde3076": "1fa9a012d92e02f5ea3bcba111b626df",
".git/objects/f4/c0edecf53b55b8b97e82fbcc987f7b98137aaf": "6e46bbdc27757c87d59f20aec5c223ee",
".git/objects/f5/bf9fa0f536c285b8c0c2ef39b9714c66fae243": "828ed007bfe4ad61a0b9a49206f1148f",
".git/objects/f6/c8dd7f71dfdc0ddf60de00d2bf08b2c94ad868": "891542413ce69ce6a2c0624842cf9207",
".git/objects/f6/f23bfe970ffe22ab2e64b10b6ae24575915cda": "076d4adec06322b02289ceda5b4dba96",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/fd/0dec6c00e9ff2231905f62c98e391724483de8": "645e1819f5b75a55af521d675cdc4c19",
".git/objects/fe/730945a01f64a61e2235dbe3f45b08f7729182": "1dfc0ae4480d18f6ff6e8730ef3222d1",
".git/refs/heads/main": "de4d3c2409a2805cfa85b2f7692ab2fe",
".git/refs/remotes/origin/main": "de4d3c2409a2805cfa85b2f7692ab2fe",
"assets/AssetManifest.json": "f85348dc2e70bd3c124555c316fe3948",
"assets/assets/background.jpg": "bd7a033186f313582ffd01965c58aab0",
"assets/assets/RAYS%2520Logo.png": "22b7288c77643bd4f393c3b42f223b9e",
"assets/FontManifest.json": "9022a696e0c92517ec2b489f89569e6f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "8c46ea7ca3ccdcadc8aeddd77752417b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c5f20dcd388decf8c82726144d9ed09a",
"/": "c5f20dcd388decf8c82726144d9ed09a",
"main.dart.js": "b25f6b6b6e386bd1c24309ecddec025c",
"manifest.json": "152fd644b695992de595cfb41411fdb7",
"version.json": "f9168861a6debe4fb1281677487ca2d8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
