# pylint: disable=C

a, b, c = (int(k) for k in input().split())

while a < 20:
    a += b

    if b > c:
        tmp = b
        b = c
        c = tmp
    else:
        b += 3

        if b > 5:
            a += 7
            b -= 1

    c += 1

if b > 5:
    a += 3
else:
    c += 2

    while a + b < c:
        a += 7
        c -= b

        while c < 2:
            c += b
            c += a

    a += 3

if b + 2 < 9:
    a += 7
else:
    c = 3


print(3 * a + b - c)
