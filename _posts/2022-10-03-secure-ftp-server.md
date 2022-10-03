---
layout: post
title: Secure FTP Server
tags: write-up haaukins forensics
---

_Time to time, FTP Servers are not very secure due to weak login credentials. Try to log into the FTP server running on
secure-ftp.com with username admin._

We can ftp to the server and login as admin but since we don't know the password we are not going very far.

Since they specify that it is weak credentials, it is obvious that we should bruteforce the password.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 77.102.7.172 ftp
```

This process takes longer than would be exptected by this type of chall - but eventually we get the password: `123qwe`
and we can simply login to the ftp service and get the file with the flag.

## Flag

```
HKN{Y0u_4re_Th3_k1nG_0f_bRu7ef0rCe}
```