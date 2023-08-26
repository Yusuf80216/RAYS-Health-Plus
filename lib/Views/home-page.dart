// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:rays_web_flutter/Widgets/navbar.dart';
import 'package:url_launcher/url_launcher.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      builder: (context, child) {
        return Scaffold(
          body: Stack(
            children: [
              SingleChildScrollView(
                child: Column(
                  children: [
                    Container(
                      width: 1.sw,
                      height: 1.sh,
                      decoration: BoxDecoration(
                        image: DecorationImage(
                          image: AssetImage("assets/background.jpg"),
                          fit: BoxFit.cover,
                        ),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Text(
                            "HEAL",
                            style: TextStyle(
                              fontSize: 76.w,
                              fontWeight: FontWeight.w600,
                              letterSpacing: 2.w,
                              color: Color(0xff00F0FF),
                            ),
                          ),
                          SizedBox(
                            height: 78.w,
                          ),
                          Text(
                            "transforming healthcare in every direction",
                            style: TextStyle(
                              fontSize: 38.w,
                              fontWeight: FontWeight.w400,
                              letterSpacing: 2.w,
                              color: Color.fromARGB(255, 255, 255, 255),
                            ),
                          ),
                          SizedBox(height: 36.w),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Container(
                                width: 146.w,
                                height: 54.w,
                                decoration: BoxDecoration(
                                  color: Colors.blueAccent,
                                  borderRadius: BorderRadius.circular(5),
                                ),
                                child: Center(
                                  child: Text(
                                    "Our Mission",
                                    style: TextStyle(
                                      fontSize: 16.w,
                                      color: Colors.white,
                                    ),
                                  ),
                                ),
                              ),
                              SizedBox(width: 58.w),
                              Container(
                                width: 170.w,
                                height: 54.w,
                                decoration: BoxDecoration(
                                  color: Color.fromARGB(255, 255, 255, 255),
                                  borderRadius: BorderRadius.circular(5),
                                ),
                                child: Center(
                                  child: Text(
                                    "View our Work",
                                    style: TextStyle(
                                      fontSize: 16.w,
                                      color: Color.fromARGB(255, 0, 0, 0),
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                    Transform(
                      transform: Matrix4.translationValues(0, -70.w, 0),
                      child: Container(
                        width: 1068.w,
                        height: 140.w,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(5),
                          boxShadow: [
                            BoxShadow(
                              blurRadius: 20.w,
                              spreadRadius: 0,
                              offset: Offset(2, 4),
                              color: Color(0xff003CB3).withOpacity(0.13),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              NavBar(),
            ],
          ),
        );
      },
      designSize: Size(1440, 1024),
    );
  }
}
