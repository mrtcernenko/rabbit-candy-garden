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
import com.google.gson.stream.JsonReader
import com.google.gson.stream.JsonToken
import java.io.StringReader

object HulahiqawPart01 {
    fun fuwoqahebucoqo(body: String): String {
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV32 = rabbitcantdnygsarwdenHulahiqawPart01ObfV32HashMix("ahg") xor rabbitcantdnygsarwdenHulahiqawPart01ObfV32SumOdds(intArrayOf(26, 37, 36)) xor rabbitcantdnygsarwdenHulahiqawPart01ObfV32ClampMod(7, 46)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV31 = rabbitcantdnygsarwdenHulahiqawPart01ObfV31ClampMod(74, 21) xor rabbitcantdnygsarwdenHulahiqawPart01ObfV31ShiftXor(28, 15) xor rabbitcantdnygsarwdenHulahiqawPart01ObfV31ByteFold("23kh0")
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV30 = rabbitcantdnygsarwdenHulahiqawPart01ObfV30SumOdds(intArrayOf(14, 1, 24)) xor rabbitcantdnygsarwdenHulahiqawPart01ObfV30ClampMod(43, 66) xor rabbitcantdnygsarwdenHulahiqawPart01ObfV30ShiftXor(69, 20)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV29 = rabbitcantdnygsarwdenHulahiqawPart01ObfV29HashMix("32f2") xor rabbitcantdnygsarwdenHulahiqawPart01ObfV29SumOdds(intArrayOf(16, 35, 18))
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV28 = rabbitcantdnygsarwdenHulahiqawPart01ObfV28SumOdds(intArrayOf(30, 33, 32)) xor rabbitcantdnygsarwdenHulahiqawPart01ObfV28ClampMod(27, 50) xor rabbitcantdnygsarwdenHulahiqawPart01ObfV28ShiftXor(21, 68)
        @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV27 = rabbitcantdnygsarwdenHulahiqawPart01ObfV27ClampMod(63, 6) xor rabbitcantdnygsarwdenHulahiqawPart01ObfV27ShiftXor(6, 57)

      @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV26 = HulrabbitcantdnygsarwdenahiqawPart01ObfV26ByteFold("73fdd") xor HulahiqawPart01ObfV26HrabbitcantdnygsarwdenashMix("72k8c") xor HulahiqawPart01ObfVrabbitcantdnygsarwden26SumOdds(intArrayOf(23, 5, 37))
    @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV25 = rabbitcantdnygsarwdenHulahiqawPart01ObfV25HashMix("5s") xor rabbitcantdnygsarwdenHulahiqawPart01ObfV25SumOdds(intArrayOf(31, 25, 29)) xor rabbitcantdnygsarwdenHulahiqawPart01ObfV25ClampMod(48, 13) xor rabbitcantdnygsarwdenHulahiqawPart01ObfV25ShiftXor(53, 16)
    @Suppress("UNUSED_VARIABLE") val rabbitcantdnygsarwdenSinkV24 = HulahiqawPart02.HulahiqawObfV24HashMix("r3q") xor HulahiqawPart03.HulahiqawObfV24SumOdds(intArrayOf(27, 64, 29)) xor HulahiqawObfV24ClampMod(15, 47) xor HulahiqawPart02.HulahiqawObfV24ShiftXor(57, 24)
    val count = JsonReader(StringReader(body)).use { reader ->
        var tokens = 0
        while (reader.peek() != JsonToken.END_DOCUMENT) {
            when (reader.peek()) {
                JsonToken.BEGIN_OBJECT -> {
                    reader.beginObject()
                    tokens += 1
                }
                JsonToken.END_OBJECT -> {
                    reader.endObject()
                    tokens += 1
                }
                JsonToken.BEGIN_ARRAY -> {
                    reader.beginArray()
                    tokens += 1
                }
                JsonToken.END_ARRAY -> {
                    reader.endArray()
                    tokens += 1
                }
                JsonToken.NAME -> {
                    reader.nextName()
                    tokens += 1
                }
                JsonToken.STRING -> {
                    reader.nextString()
                    tokens += 1
                }
                JsonToken.NUMBER -> {
                    reader.nextDouble()
                    tokens += 1
                }
                JsonToken.BOOLEAN -> {
                    reader.nextBoolean()
                    tokens += 1
                }
                JsonToken.NULL -> {
                    reader.nextNull()
                    tokens += 1
                }
                else -> {
                    reader.skipValue()
                    tokens += 1
                }
            }
        }
        tokens
    }
    return count.toString()
}

    fun HulahiqawObfV24ClampMod(n: Int, m: Int): Int {

  val span = (m % 66) + 4
  val x = n % span
  return if (x < 0) x + span else x
}
}


/* obfuscation-batch:v25 */
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV25HashMix(s: String): Int {

  var h = 47
  for (i in s.indices) h = (h xor (s[i].code * 16)) % 612
  return h
}

private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV25SumOdds(nums: IntArray): Int {

  var acc = 21
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 24) % 559
  }
  return acc
}

private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV25ClampMod(n: Int, m: Int): Int {

  val span = (m % 32) + 3
  val x = n % span
  return if (x < 0) x + span else x
}

private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV25ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 66) and 22035
}


/* obfuscation-batch:v26 */
private fun HulrabbitcantdnygsarwdenahiqawPart01ObfV26ByteFold(s: String): Int {

  var x = 35
  for (i in s.indices) x = (x + s[i].code * 23) and 42990
  return x
}

private fun HulahiqawPart01ObfV26HrabbitcantdnygsarwdenashMix(s: String): Int {

  var h = 54
  for (i in s.indices) h = (h xor (s[i].code * 35)) % 270
  return h
}

private fun HulahiqawPart01ObfVrabbitcantdnygsarwden26SumOdds(nums: IntArray): Int {
  var acc = 41
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 33) % 463
  }
  return acc
}


/* obfuscation-batch:v27 */
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 54) + 14
  val x = n % span
  return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 83) and 39370
}

/* obfuscation-batch:v28 */
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV28SumOdds(nums: IntArray): Int {
    var acc = 76
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 24) % 484
    }
    return acc
}
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 31) + 12
    val x = ((n xor 51) shl 7) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 109) and 49951
}

/* obfuscation-batch:v29 */
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV29HashMix(s: String): Int {
    var h = 17
    for (i in s.indices) h = (h xor (s[i].code * 19)) % 537
    return h
}
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV29SumOdds(nums: IntArray): Int {
    var acc = 29
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 38) % 260
    }
    return acc
}

/* obfuscation-batch:v30 */
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV30SumOdds(nums: IntArray): Int {
    var acc = 44
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 19) % 604
    }
    return acc
}
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV30ClampMod(n: Int, m: Int): Int {
    val span = (m % 35) + 4
    val x = ((n xor 123) shl 7) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV30ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 9) and 41382
}

/* obfuscation-batch:v31 */
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV31ClampMod(n: Int, m: Int): Int {
    val span = (m % 66) + 8
    val x = ((n xor 160) shl 3) % span
    return if (x < 0) x + span else x
}
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV31ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 30) and 15368
}
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV31ByteFold(s: String): Int {
    var x = 64
    for (i in s.indices) x = (x + s[i].code * 6) and 49929
    return x
}

/* obfuscation-batch:v32 */
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV32HashMix(s: String): Int {
    var h = 17
    for (i in s.indices) h = (h xor (s[i].code * 23)) % 306
    return h
}
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV32SumOdds(nums: IntArray): Int {
    var acc = 43
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 39) % 115
    }
    return acc
}
private fun rabbitcantdnygsarwdenHulahiqawPart01ObfV32ClampMod(n: Int, m: Int): Int {
    val span = (m % 35) + 3
    val x = ((n xor 149) shl 7) % span
    return if (x < 0) x + span else x
}

/* obfuscation-repair-stubs */

private fun HulahiqawObfV24HashMix(p0: String): Int {
    var acc = 12
    acc = (acc + p0.length * 3) and 65535
    return acc
}

private fun HulahiqawObfV24SumOdds(p0: IntArray): Int {
    var acc = 12
    for (n in p0) acc = (acc + n) and 65535
    return acc
}

private fun HulahiqawObfV24ShiftXor(p0: Int, p1: Int): Int {
    var acc = 13
    acc = acc xor p0
    acc = acc xor p1
    return acc
}
