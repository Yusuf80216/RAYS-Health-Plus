import 'package:flutter/material.dart';

import 'Views/home-page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'RAYS Health Plus',
      theme: ThemeData(
        fontFamily: 'Poppins',
      ),
      home: HomePage(),
    );
  }
}
