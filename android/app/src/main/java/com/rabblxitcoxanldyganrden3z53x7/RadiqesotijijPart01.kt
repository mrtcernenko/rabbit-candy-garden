/* autosetup-split:v1 */
package com.rabblxitcoxanldyganrden3z53x7

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

object RadiqesotijijPart01 {
    fun suwobupobok(): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV5 = rabbitcantdnygsarwdenRadiqesotijijPart0ObfV5ClampMod(57, 24) xor rabbitcantdnygsarwdenRadiqesotijijPart0ObfV5ShiftXor(35, 74)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV4 = rabbitcantdnygsarwdenRadiqesotijijPart0ObfV4ByteFold("bi9g") xor rabbitcantdnygsarwdenRadiqesotijijPart0ObfV4HashMix("4l0") xor rabbitcantdnygsarwdenRadiqesotijijPart0ObfV4SumOdds(intArrayOf(14, 33, 40)) xor rabbitcantdnygsarwdenRadiqesotijijPart0ObfV4ClampMod(35, 10)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV3 = rabbitcantdnygsarwdenRadiqesotijijPart0ObfV3SumOdds(intArrayOf(37, 28, 39)) xor rabbitcantdnygsarwdenRadiqesotijijPart0ObfV3ClampMod(38, 33)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV2 = rabbitcantdnygsarwdenRadiqesotijijPart0ObfV2HashMix("ni") xor rabbitcantdnygsarwdenRadiqesotijijPart0ObfV2SumOdds(intArrayOf(20, 7, 14)) xor rabbitcantdnygsarwdenRadiqesotijijPart0ObfV2ClampMod(17, 16) xor rabbitcantdnygsarwdenRadiqesotijijPart0ObfV2ShiftXor(43, 2)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenRadiqesotijijPart0ObfV1HashMix("il") xor rabbitcantdnygsarwdenRadiqesotijijPart0ObfV1SumOdds(intArrayOf(39, 14, 25)) xor rabbitcantdnygsarwdenRadiqesotijijPart0ObfV1ClampMod(40, 59)
    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}
}

/* obfuscation-batch:v1 */
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV1HashMix(s: String): Int {
    var h = 72
    for (i in s.indices) h = (h xor (s[i].code * 18)) % 544
    return h
}
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV1SumOdds(nums: IntArray): Int {
    var acc = 88
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 5) % 292
    }
    return acc
}
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 24) + 5
    val x = ((n xor 18) shl 5) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v2 */
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV2HashMix(s: String): Int {
    var h = 27
    for (i in s.indices) h = (h xor (s[i].code * 25)) % 146
    return h
}
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV2SumOdds(nums: IntArray): Int {
    var acc = 79
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 19) % 517
    }
    return acc
}
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 60) + 3
    val x = ((n xor 7) shl 4) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 93) and 15286
}

/* obfuscation-batch:v3 */
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV3SumOdds(nums: IntArray): Int {
    var acc = 61
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 35) % 819
    }
    return acc
}
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV3ClampMod(n: Int, m: Int): Int {
    val span = (m % 59) + 11
    val x = ((n xor 100) shl 1) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v4 */
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV4ByteFold(s: String): Int {
    var x = 28
    for (i in s.indices) x = (x + s[i].code * 14) and 27348
    return x
}
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV4HashMix(s: String): Int {
    var h = 69
    for (i in s.indices) h = (h xor (s[i].code * 20)) % 710
    return h
}
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV4SumOdds(nums: IntArray): Int {
    var acc = 16
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 16) % 131
    }
    return acc
}
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV4ClampMod(n: Int, m: Int): Int {
    val span = (m % 34) + 9
    val x = ((n xor 137) shl 6) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v5 */
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV5ClampMod(n: Int, m: Int): Int {
    val span = (m % 68) + 7
    val x = ((n xor 143) shl 7) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenRadiqesotijijPart0ObfV5ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 7) and 8726
}
