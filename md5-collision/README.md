# md5-collision 

as the name indicates, the challenge lets us upload two files.

after some searching about the challenge name :
``
a method to create a pair of inputs for which MD5 produces identical checksums.
``

the solution is to upload two files that has the same md5 hash. 

you can use some services that lets you produce a txt file with the same hash as another.

https://www.mathstat.dal.ca/~selinger/md5collision/

an easy way we can download the 2 .exe files and then changes their ectention to .txt. and voila, the flag.