# pylint: disable=C

a, b, c = (int(k) for k in input().split())

if a > 2:
    a += 1

    if b < 5:
        c += 3
    else:
        a += 7
else:
    c += 7

    if c > 16:
        c -= 5
        c -= 1

if c > 2:
    c += 1

    while b > 0:
        b -= a
        c += a

        if b + c < 7:
            a += 7
        else:
            b += 2

        while a > 84:
            a -= b + c
            b += 2

if a > 10:
    c -= a
else:
    b += 2

if b < 5:
    c += 3

    if a > 77:
        a = 69
        b = 420

else:
    a += 7

if a + b + c >= 69:
    a = 69
else:
    b = a + c

print(a + 2 * b + 3 * c)
