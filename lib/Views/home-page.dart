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
                    ContactForm(),
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

class ContactForm extends StatelessWidget {
  const ContactForm({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final _emailController = TextEditingController();
    final _phoneController = TextEditingController();
    final _queryController = TextEditingController();
    return Transform(
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
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Row(
                  children: [
                    Icon(
                      Icons.email_outlined,
                      color: Color(0xff3267FF),
                      size: 20.w,
                    ),
                    SizedBox(
                      width: 14.75.w,
                    ),
                    Text(
                      "Email Address",
                      style: TextStyle(
                        fontSize: 16.w,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 14.6.w),
                SizedBox(
                  width: 256.67.w,
                  height: 47.59.w,
                  child: TextField(
                    controller: _emailController,
                    decoration: InputDecoration(
                      hintText: "Enter your email id...",
                      hintStyle: TextStyle(
                        fontSize: 16.w,
                        color: Color(0xffCCCCCC),
                      ),
                      contentPadding: EdgeInsets.symmetric(
                          vertical: 10.w, horizontal: 10.w),
                      enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(
                          width: 1.w,
                          color: Color(0xffE7E7E7),
                        ),
                        borderRadius: BorderRadius.circular(5),
                      ),
                      focusedBorder: OutlineInputBorder(
                        borderSide: BorderSide(
                          width: 1.w,
                          color: Color(0xffE7E7E7),
                        ),
                        borderRadius: BorderRadius.circular(5),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Row(
                  children: [
                    Icon(
                      Icons.phone_android_outlined,
                      color: Color(0xff3267FF),
                      size: 20.w,
                    ),
                    SizedBox(
                      width: 14.75.w,
                    ),
                    Text(
                      "Phone Number",
                      style: TextStyle(
                        fontSize: 16.w,
                        fontWeight: FontWeight.w600,
                      ),
                    )
                  ],
                ),
                SizedBox(height: 14.6.w),
                SizedBox(
                  width: 256.67.w,
                  height: 47.59.w,
                  child: TextField(
                    controller: _phoneController,
                    decoration: InputDecoration(
                      hintText: "Enter your phone number...",
                      hintStyle: TextStyle(
                        fontSize: 16.w,
                        color: Color(0xffCCCCCC),
                      ),
                      contentPadding: EdgeInsets.symmetric(
                          vertical: 10.w, horizontal: 10.w),
                      enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(
                          width: 1.w,
                          color: Color(0xffE7E7E7),
                        ),
                        borderRadius: BorderRadius.circular(5),
                      ),
                      focusedBorder: OutlineInputBorder(
                        borderSide: BorderSide(
                          width: 1.w,
                          color: Color(0xffE7E7E7),
                        ),
                        borderRadius: BorderRadius.circular(5),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Row(
                  children: [
                    Icon(
                      Icons.message_outlined,
                      color: Color(0xff3267FF),
                      size: 20.w,
                    ),
                    SizedBox(
                      width: 14.75.w,
                    ),
                    Text(
                      "Query",
                      style: TextStyle(
                        fontSize: 16.w,
                        fontWeight: FontWeight.w600,
                      ),
                    )
                  ],
                ),
                SizedBox(height: 14.6.w),
                SizedBox(
                  width: 256.67.w,
                  height: 47.59.w,
                  child: TextField(
                    controller: _queryController,
                    decoration: InputDecoration(
                      hintText: "What is your query?",
                      hintStyle: TextStyle(
                        fontSize: 16.w,
                        color: Color(0xffCCCCCC),
                      ),
                      contentPadding: EdgeInsets.symmetric(
                          vertical: 10.w, horizontal: 10.w),
                      enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(
                          width: 1.w,
                          color: Color(0xffE7E7E7),
                        ),
                        borderRadius: BorderRadius.circular(5),
                      ),
                      focusedBorder: OutlineInputBorder(
                        borderSide: BorderSide(
                          width: 1.w,
                          color: Color(0xffE7E7E7),
                        ),
                        borderRadius: BorderRadius.circular(5),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            Container(
              width: 162.86.w,
              height: 54.w,
              decoration: BoxDecoration(
                color: Color(0xff3267FF),
                borderRadius: BorderRadius.circular(5.w),
              ),
              child: Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Icon(
                      Icons.send_outlined,
                      size: 15.w,
                      color: Color.fromARGB(255, 255, 255, 255),
                    ),
                    Text(
                      "Book Now",
                      style: TextStyle(fontSize: 16.w, color: Colors.white),
                    )
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
