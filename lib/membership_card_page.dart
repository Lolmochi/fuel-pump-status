import 'package:flutter/material.dart';

class MembershipCardPage extends StatelessWidget {
  final List<Map<String, dynamic>> members = [
    {'id': 'M001', 'name': 'John Doe', 'membershipLevel': 'Gold'},
    {'id': 'M002', 'name': 'Jane Smith', 'membershipLevel': 'Silver'},
    // เพิ่มข้อมูลสมาชิกเพิ่มเติมที่นี่
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Membership Cards'),
      ),
      body: ListView.builder(
        itemCount: members.length,
        itemBuilder: (context, index) {
          final member = members[index];
          return Card(
            child: ListTile(
              title: Text('Member Name: ${member['name']}'),
              subtitle: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('ID: ${member['id']}'),
                  Text('Level: ${member['membershipLevel']}'),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
