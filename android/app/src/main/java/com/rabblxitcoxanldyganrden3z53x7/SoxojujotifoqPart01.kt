/* autosetup-split:v1 */
package com.rabblxitcoxanldyganrden3z53x7

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.android.volley.DefaultRetryPolicy
import com.android.volley.ExecutorDelivery
import com.android.volley.Request as VolleyRequest
import com.android.volley.RequestQueue
import com.android.volley.toolbox.BasicNetwork
import com.android.volley.toolbox.HurlStack
import com.android.volley.toolbox.NoCache
import com.android.volley.toolbox.StringRequest
import java.util.concurrent.CountDownLatch
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

object SoxojujotifoqPart01 {
    fun gevezumekemur(body: String): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV5 = rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV5ShiftXor(39, 78) xor rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV5ByteFold("jel858") xor rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV5HashMix("k50ba3") xor rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV5SumOdds(intArrayOf(23, 22, 1))
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV4 = rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV4ByteFold("7idc") xor rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV4HashMix("27o7c")
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV3 = rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV3ShiftXor(27, 18) xor rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV3ByteFold("3c1") xor rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV3HashMix("haj69") xor rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV3SumOdds(intArrayOf(7, 38, 33))
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV2 = rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV2ClampMod(29, 28) xor rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV2ShiftXor(71, 62)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV1ClampMod(32, 67)
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}
}

/* obfuscation-batch:v1 */
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 25) + 5
    val x = ((n xor 58) shl 1) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v2 */
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 30) + 10
    val x = ((n xor 57) shl 4) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 191) and 43670
}

/* obfuscation-batch:v3 */
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV3ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 233) and 15791
}
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV3ByteFold(s: String): Int {
    var x = 3
    for (i in s.indices) x = (x + s[i].code * 21) and 27132
    return x
}
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV3HashMix(s: String): Int {
    var h = 88
    for (i in s.indices) h = (h xor (s[i].code * 33)) % 733
    return h
}
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV3SumOdds(nums: IntArray): Int {
    var acc = 17
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 30) % 320
    }
    return acc
}

/* obfuscation-batch:v4 */
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV4ByteFold(s: String): Int {
    var x = 42
    for (i in s.indices) x = (x + s[i].code * 12) and 35660
    return x
}
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV4HashMix(s: String): Int {
    var h = 21
    for (i in s.indices) h = (h xor (s[i].code * 18)) % 669
    return h
}

/* obfuscation-batch:v5 */
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV5ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 77) and 45478
}
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV5ByteFold(s: String): Int {
    var x = 18
    for (i in s.indices) x = (x + s[i].code * 4) and 33228
    return x
}
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV5HashMix(s: String): Int {
    var h = 18
    for (i in s.indices) h = (h xor (s[i].code * 6)) % 171
    return h
}
private fun rabbitcantdnygsarwdenSoxojujotifoqPart0ObfV5SumOdds(nums: IntArray): Int {
    var acc = 20
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 8) % 747
    }
    return acc
}
