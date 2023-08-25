import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class NavBar extends StatelessWidget {
  const NavBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(top: 20.w, left: 20.w, right: 20.w),
      child: Container(
        height: 90.w,
        decoration: BoxDecoration(
          color: Color.fromARGB(222, 0, 0, 0),
          borderRadius: BorderRadius.circular(10),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Padding(
              padding: EdgeInsets.only(left: 50.w),
              child: Image(
                image: AssetImage("assets/RAYS Logo.png"),
                width: 180.w,
              ),
            ),
            Padding(
              padding: EdgeInsets.only(right: 46.w),
              child: Row(
                children: [
                  PageLinks(name: "Home"),
                  PageLinks(name: "About"),
                  PageLinks(name: "Our Work"),
                  PageLinks(name: "Photos & Video Gallery"),
                  PageLinks(name: "Services"),
                  PageLinks(name: "Contact"),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class PageLinks extends StatelessWidget {
  String name;
  PageLinks({
    Key? key,
    required this.name,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 30.w),
      child: Text(
        name,
        style: TextStyle(
          color: Colors.white,
          fontSize: 22.w,
        ),
      ),
    );
  }
}
