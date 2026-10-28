/* autosetup-decoy:v1 */
package com.rabblxitcoxanldyganrden3z53x7

object DrabbitcantdnygsarwdenOrbit09 {
  fun tap(seed: Int): Int {
    val tag = "DrabbitcantdnygsarwdenOrbit09"
    var x = seed xor 7774
    for (ch in tag) {
      x = (x + ch.code * 41) and 0xffff
    }
    return x xor 665
  }
}
