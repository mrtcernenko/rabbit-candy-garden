/* autosetup-decoy:v1 */
package com.rabblxitcoxanldyganrden3z53x7

object DrabbitcantdnygsarwdenVale01 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 61295
    x = (x ushr 4) xor 463
    x = (x * 31) and 0xffff
    return x
  }
}
