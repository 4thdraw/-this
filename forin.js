const navi = [
    '네이버', '다음', '구글'
]
for (x in navi) {
    console.log(navi[x])
}
const naviobj = {
    nm: "글자",
    href: "링큭값"
}
console.log(naviobj['nm']) // obj key를 직접 index자리에 넣지만 상수화해야한다.

for (j in naviobj) { // 여기서는 j를 정확하게 인지하고 있다 key라는 것을
    console.log(j, naviobj[j])
}