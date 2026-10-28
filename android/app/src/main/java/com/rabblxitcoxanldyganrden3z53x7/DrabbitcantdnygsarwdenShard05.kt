/* autosetup-decoy:v1 */
package com.rabblxitcoxanldyganrden3z53x7

object DrabbitcantdnygsarwdenShard05 {
  fun tap(seed: Int): Int {
    val tag = "DrabbitcantdnygsarwdenShard05"
    var x = seed xor 5332
    for (ch in tag) {
      x = (x + ch.code * 27) and 0xffff
    }
    return x xor 3255
  }
}
