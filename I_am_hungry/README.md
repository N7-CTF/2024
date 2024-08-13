# I'am Hungry !

## Scenario :

You want to eat your favorite salade at your favorite restaurant, but unfortunately, the restaurant is closed, and you don't want to wait till tomorrow to enjoy it.

Find a way to get your favorite salade.

Note : there's no additional security protocol in the restaurant.

## 1st FLAG : Openning the restaurant door

Given a encrypted flag in the flag.txt file, participants should figure out that the private key used to encrypt the flag is in the door.jpg. To retrieve that key, you can simply run the command to obtain the key.txt file :

```shell
steghide extract -sf door.jpg
```

Note that, there's no additional password to get the file.

Next, they need to decrypt the flag using this command:

```shell
openssl rsautl -decrypt -inkey key.txt -in flag.txt -out open.txt
```

And here you are! you successful managed to get the first flag, and openning the restaurant.

## 2nd FLAG : Getting your salade

After you opened the restaurant, you can get the encoded the flag that is inside your salade by using this command :

```shell
exiftool salade.png
```

And because the salade is a cesar salade, participants should notice that the flag is encoded using ceasar cipher. You can simply using any onlinde tool to decode the final flag.



## Author

- [@relmarrakchy](https://github.com/relmarrakchy)
