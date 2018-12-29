# -*- coding: UTF-8 -*-
from com.android.monkeyrunner import MonkeyRunner, MonkeyDevice

print 'waiting'
device = MonkeyRunner.waitForConnection()
print 'connected'

for i in range(1, 3000):
    print i
    device.type(str(i) + 'abc\n')
    MonkeyRunner.sleep(0.2)
