var fizzbuzz = function(a){
	if(a % 15 == 0){
		return "fizzbuzz"
	}else if(a % 3 ==0){
		return "fizz"
	}else if(a % 5 == 0){
		return "buzz"
	}else{
		return a
	}
} //ちなむと、5を書いて、3を書いて、から15を書いたら。プログラミングって上から読むから、15って結局5の倍数だから、ひっかかっちゃう。だから、順番変えればOK!!15を先に持ってくる！