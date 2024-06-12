

after we access our website we can see in the console that debug mode is disabled.

![1.png](images%2F1.png)

secondly you should add the query ``?debug=1`` to the web address

![2.png](images%2F2.png)

as we can see the debug mode is enabled the the server resonds with a table, it looks like a users tables with passwords.

![3.png](images%2F3.png)

we  can see a javascript code added to our html, the code takes a table name ``users`` in our case and returns it's content.

![4.png](images%2F4.png)

this code is vulnerable to an SQL injection.

![5.png](images%2F5.png)

in Burp Suite we can see a request sent to the server that contains the users table, we will inject our payload in order to return the flag:

``
users,flag
``

![6.png](images%2F6.png)

![7.png](images%2F7.png)

flag:
``
N7-CTF{d0_n0t_5t0r3_7h15_1n_7h3_d474b453}
``