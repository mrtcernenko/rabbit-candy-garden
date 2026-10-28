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

object LixexagarePart01 {
    fun bebogixatohuq(): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV2 = rabbitcantdnygsarwdenLixexagarePart01ObfV2HashMix("fe9") xor rabbitcantdnygsarwdenLixexagarePart01ObfV2SumOdds(intArrayOf(5, 20, 15))
    @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV1 = rabbitcantdnygsarwdenLixexagareObfV1ByteFold("7mjo") xor rabbitcantdnygsarwdenLixexagareObfV1HashMix("g56p") xor rabbitcantdnygsarwdenLixexagareObfV1SumOdds(intArrayOf(25, 8, 27)) xor rabbitcantdnygsarwdenLixexagareObfV1ClampMod(74, 21)
    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}

    fun rabbitcantdnygsarwdenLixexagareObfV1ByteFold(s: String): Int {
    var x = 25
    for (i in s.indices) x = (x + s[i].code * 7) and 6892
    return x
}

    fun rabbitcantdnygsarwdenLixexagareObfV1HashMix(s: String): Int {
    var h = 76
    for (i in s.indices) h = (h xor (s[i].code * 19)) % 219
    return h
}

    fun rabbitcantdnygsarwdenLixexagareObfV1SumOdds(nums: IntArray): Int {
    var acc = 4
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 37) % 670
    }
    return acc
}

    fun rabbitcantdnygsarwdenLixexagareObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 51) + 6
    val x = ((n xor 232) shl 3) % span
    return if (x < 0) x + span else x
}
}

/* obfuscation-batch:v2 */
private fun rabbitcantdnygsarwdenLixexagarePart01ObfV2HashMix(s: String): Int {
    var h = 3
    for (i in s.indices) h = (h xor (s[i].code * 37)) % 759
    return h
}
private fun rabbitcantdnygsarwdenLixexagarePart01ObfV2SumOdds(nums: IntArray): Int {
    var acc = 43
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 39) % 580
    }
    return acc
}
