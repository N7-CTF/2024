# JWT-VULN
### qualifications phase web challenge


firstly we need to login with a username and a password, we can enter any credentials we want but they should be 30+ characters long.


after we can try to crack the jwt token using hashcat and rockyou.txt


```agsl
hashcat -m 16500 -a 0 jwt_token.txt /usr/share/wordlists/rockyou.txt 
```

when we find the secret key used to sign jwt token, we can go ahead and change the username to "admin".

finally we should put the token in the place of the old one.
then proceed to /flag endpoint.

