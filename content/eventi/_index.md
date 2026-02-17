---
title: "Eventi"
date: 2024-02-17
weight: 9
view: "list"
featured: true    # <--- "Eventi" (il contenitore) DEVE apparire in Home

# BLOCCO MAGICO: Questo applica le regole a tutti i file DENTRO questa cartella
cascade:
  featured: false # <--- I figli (Natale, Pasqua) NON devono apparire in Home
  private: false  # <--- Devono comunque essere visibili se clicco su "Eventi"

resources:
  - src: "cover.jpg"
    params:
      cover: true
---
Qui trovi le raccolte delle feste.