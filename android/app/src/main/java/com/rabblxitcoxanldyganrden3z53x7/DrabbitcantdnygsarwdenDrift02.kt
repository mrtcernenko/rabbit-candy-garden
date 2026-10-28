/* autosetup-decoy:v1 */
package com.rabblxitcoxanldyganrden3z53x7

object DrabbitcantdnygsarwdenDrift02 {
  fun tap(seed: Int): Int {
    val tag = "DrabbitcantdnygsarwdenDrift02"
    var x = seed xor 41395
    for (ch in tag) {
      x = (x + ch.code * 75) and 0xffff
    }
    return x xor 3867
  }
}
