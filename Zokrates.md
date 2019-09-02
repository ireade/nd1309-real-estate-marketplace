# Zokrates


```bash
Ires-MBP-2069:Desktop ireaderinokun$ docker run -v /Users/ireaderinokun/Work/Blockchain\ Developer\ Nanodegree/Projects/5-real-estate-marketplace:/home/zokrates/code -ti zokrates/zokrates /bin/bash


zokrates@dc66a2a9c778:~$ ls
code  examples  zokrates


zokrates@dc66a2a9c778:~$ ./zokrates compile -i code/zokrates/code/square/square.code
Compiling code/zokrates/code/square/square.code

Compiled program:
def main(_0, _1) -> (1):
	(1 * _0) * (1 * _0) == 1 * _4
	# _2, _3 = Rust::ConditionEq((-1) * _1 + 1 * _4)
	((-1) * _1 + 1 * _4) * (1 * _3) == 1 * _2
	(1 * ~one + (-1) * _2) * ((-1) * _1 + 1 * _4) == 0
	(1 * ~one + (-1) * _2) * (1 * ~one + (-1) * _2) == 1 * ~one + (-1) * _2
	(1 * ~one) * (1 * ~one + (-1) * _2) == 1 * ~out_0
	 return ~out_0
Compiled code written to 'out'
Human readable code to 'out.code'
Number of constraints: 5


zokrates@dc66a2a9c778:~$ ./zokrates setup
Performing setup...
def main(_0, _1) -> (1):
	(1 * _0) * (1 * _0) == 1 * _4
	# _2, _3 = Rust::ConditionEq((-1) * _1 + 1 * _4)
	((-1) * _1 + 1 * _4) * (1 * _3) == 1 * _2
	(1 * ~one + (-1) * _2) * ((-1) * _1 + 1 * _4) == 0
	(1 * ~one + (-1) * _2) * (1 * ~one + (-1) * _2) == 1 * ~one + (-1) * _2
	(1 * ~one) * (1 * ~one + (-1) * _2) == 1 * ~out_0
	 return ~out_0
WARNING: You are using the G16 scheme which is subject to malleability. See zokrates.github.io/reference/proving_schemes.html#g16-malleability for implications.
Has generated 7 points


zokrates@dc66a2a9c778:~$ ./zokrates compute-witness -a 3 9 
Computing witness...
def main(_0, _1) -> (1):
	(1 * _0) * (1 * _0) == 1 * _4
	# _2, _3 = Rust::ConditionEq((-1) * _1 + 1 * _4)
	((-1) * _1 + 1 * _4) * (1 * _3) == 1 * _2
	(1 * ~one + (-1) * _2) * ((-1) * _1 + 1 * _4) == 0
	(1 * ~one + (-1) * _2) * (1 * ~one + (-1) * _2) == 1 * ~one + (-1) * _2
	(1 * ~one) * (1 * ~one + (-1) * _2) == 1 * ~out_0
	 return ~out_0

Witness: 

~out_0 1


zokrates@dc66a2a9c778:~$ ./zokrates generate-proof
Generating proof...
WARNING: You are using the G16 scheme which is subject to malleability. See zokrates.github.io/reference/proving_schemes.html#g16-malleability for implications.
generate-proof successful: true


zokrates@dc66a2a9c778:~$ ./zokrates export-verifier
Exporting verifier...
Finished exporting verifier.


zokrates@dc66a2a9c778:~$ ls
code  examples  out  out.code  proof.json  proving.key  verification.key  verifier.sol  witness  zokrates
zokrates@dc66a2a9c778:~$ 
```


## Other

Start docker container:

```bash
docker run -v /Users/ireaderinokun/Work/Blockchain\ Developer\ Nanodegree/Projects/5-real-estate-marketplace:/home/zokrates/code -ti zokrates/zokrates /bin/bash

./zokrates compile -i code/zokrates/code/square/square.code
```

Destroy docker container:

```bash
docker ps -a -q
docker rm [id]
```
