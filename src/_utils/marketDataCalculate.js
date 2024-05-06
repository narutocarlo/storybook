export function marketData(newSelectedFilterFields, newMarketScreenerData) {
  if (newSelectedFilterFields['industry'] && newSelectedFilterFields['industry'] != null) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['industry'] == newSelectedFilterFields['industry'];
    });
  }

  // NR7 Day
  if (newSelectedFilterFields['todayNR7']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['today_high'] - item['today_low'] < item['nr7_range'];
    });
  }
  if (newSelectedFilterFields['yesterdayNR7']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['nr7'] == 'Yes';
    });
  }

  // Gap Up / Gap Down
  if (newSelectedFilterFields['todayGapUP'] || newSelectedFilterFields['todayGapDown']) {
    if (newSelectedFilterFields['todayGapUP'] && !newSelectedFilterFields['todayGapDown']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_open'] > item['prev_close'];
      });
    } else if (newSelectedFilterFields['todayGapDown'] && !newSelectedFilterFields['todayGapUP']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_open'] < item['prev_close'];
      });
    }
  }
  if (newSelectedFilterFields['todayGapUP'] && newSelectedFilterFields['todayGapDown']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['today_open'] > item['prev_close'] || item['today_open'] < item['prev_close'];
    });
  }

  if (newSelectedFilterFields['yesterdayGapUP'] || newSelectedFilterFields['yesterdayGapDown']) {
    if (newSelectedFilterFields['yesterdayGapUP'] && !newSelectedFilterFields['yesterdayGapDown']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['prev_open'] > item['day_before_close'];
      });
    } else if (newSelectedFilterFields['yesterdayGapDown'] && !newSelectedFilterFields['yesterdayGapUP']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['prev_open'] < item['day_before_close'];
      });
    }
  }
  if (newSelectedFilterFields['yesterdayGapUP'] && newSelectedFilterFields['yesterdayGapDown']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['prev_open'] > item['day_before_close'] || item['prev_open'] < item['day_before_close'];
    });
  }

  // ---------------Opening Price Clues------------------------//

  if (newSelectedFilterFields['todayStockOpenHigh'] || newSelectedFilterFields['todayStockOpenLow']) {
    if (newSelectedFilterFields['todayStockOpenHigh'] && !newSelectedFilterFields['todayStockOpenLow']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_open'] == item['today_high'];
      });
    } else if (newSelectedFilterFields['todayStockOpenLow'] && !newSelectedFilterFields['todayStockOpenHigh']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_open'] <= item['today_low'];
      });
    }
  }
  if (newSelectedFilterFields['todayStockOpenHigh'] && newSelectedFilterFields['todayStockOpenLow']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['today_open'] == item['today_high'] || item['today_open'] <= item['today_low'];
    });
  }

  if (newSelectedFilterFields['yesterdayStockOpenHigh'] || newSelectedFilterFields['yesterdayStockOpenLow']) {
    if (newSelectedFilterFields['yesterdayStockOpenHigh'] && !newSelectedFilterFields['yesterdayStockOpenLow']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['prev_open'] == item['prev_high'];
      });
    } else if (newSelectedFilterFields['yesterdayStockOpenLow'] && !newSelectedFilterFields['yesterdayStockOpenHigh']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['prev_open'] <= item['prev_low'];
      });
    }
  }
  if (newSelectedFilterFields['yesterdayStockOpenHigh'] && newSelectedFilterFields['yesterdayStockOpenLow']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['prev_open'] == item['prev_high'] || item['prev_open'] <= item['prev_low'];
    });
  }

  // -----------------------------Range Breakout-----------------------------------------//

  if (newSelectedFilterFields['range20DayUP'] || newSelectedFilterFields['range20DayDown']) {
    if (newSelectedFilterFields['range20DayUP'] && !newSelectedFilterFields['range20DayDown']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_high'] > item['high_day20'];
      });
    } else if (newSelectedFilterFields['range20DayDown'] && !newSelectedFilterFields['range20DayUP']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_low'] < item['low_day20'];
      });
    }
  }
  if (newSelectedFilterFields['range20DayUP'] && newSelectedFilterFields['range20DayDown']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['today_high'] > item['high_day20'] || item['today_low'] < item['low_day20'];
    });
  }

  if (newSelectedFilterFields['range50DayUP'] || newSelectedFilterFields['range50DayDown']) {
    if (newSelectedFilterFields['range50DayUP'] && !newSelectedFilterFields['range50DayDown']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_high'] > item['high_day50'];
      });
    } else if (newSelectedFilterFields['range50DayDown'] && !newSelectedFilterFields['range50DayUP']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_low'] < item['low_day50'];
      });
    }
  }
  if (newSelectedFilterFields['range50DayUP'] && newSelectedFilterFields['range50DayDown']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['today_high'] > item['high_day50'] || item['today_low'] < item['low_day50'];
    });
  }

  if (newSelectedFilterFields['range200DayUP'] || newSelectedFilterFields['range200DayDown']) {
    if (newSelectedFilterFields['range200DayUP'] && !newSelectedFilterFields['range200DayDown']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_high'] > item['high_day200'];
      });
    } else if (newSelectedFilterFields['range200DayDown'] && !newSelectedFilterFields['range200DayUP']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_low'] < item['low_day200'];
      });
    }
  }
  if (newSelectedFilterFields['range200DayUP'] && newSelectedFilterFields['range200DayDown']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['today_high'] > item['high_day200'] || item['today_low'] < item['low_day200'];
    });
  }

  if (newSelectedFilterFields['range52WeekHigh'] || newSelectedFilterFields['range52WeekLow']) {
    if (newSelectedFilterFields['range52WeekHigh'] && !newSelectedFilterFields['range52WeekLow']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_high'] > item['today_high52'];
      });
    } else if (newSelectedFilterFields['range52WeekLow'] && !newSelectedFilterFields['range52WeekHigh']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_low'] < item['today_low52'];
      });
    }
  }
  if (newSelectedFilterFields['range52WeekHigh'] && newSelectedFilterFields['range52WeekLow']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['today_high'] > item['today_high52'] || item['today_low'] < item['today_low52'];
    });
  }

  // --------------------------Price Action-------------------------------------//

  if (newSelectedFilterFields['higherHighHigherLow'] || newSelectedFilterFields['lowerHighLowerLow']) {
    if (newSelectedFilterFields['higherHighHigherLow'] && !newSelectedFilterFields['lowerHighLowerLow']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_high'] > item['prev_high'] && item['today_low'] > item['prev_low'];
      });
    } else if (newSelectedFilterFields['lowerHighLowerLow'] && !newSelectedFilterFields['higherHighHigherLow']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_high'] < item['prev_high'] && item['today_low'] < item['prev_low'];
      });
    }
  }
  if (newSelectedFilterFields['higherHighHigherLow'] && newSelectedFilterFields['lowerHighLowerLow']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return (
        item['today_high'] > item['prev_high'] ||
        item['today_low'] > item['prev_low'] ||
        item['today_high'] < item['prev_high'] ||
        item['today_low'] < item['prev_low']
      );
    });
  }

  if (newSelectedFilterFields['insideDay'] || newSelectedFilterFields['outsideDay']) {
    if (newSelectedFilterFields['insideDay'] && !newSelectedFilterFields['outsideDay']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_high'] < item['prev_high'] && item['today_low'] > item['prev_low'];
      });
    } else if (newSelectedFilterFields['outsideDay'] && !newSelectedFilterFields['insideDay']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_high'] > item['prev_high'] && item['today_low'] < item['prev_low'];
      });
    }
  }
  if (newSelectedFilterFields['insideDay'] && newSelectedFilterFields['outsideDay']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return (
        item['today_high'] < item['prev_high'] ||
        item['today_low'] > item['prev_low'] ||
        item['today_high'] > item['prev_high'] ||
        item['today_low'] < item['prev_low']
      );
    });
  }

  // -------------------------------Price Range------------------------------//

  if (
    newSelectedFilterFields['range0To100'] ||
    newSelectedFilterFields['range100To500'] ||
    newSelectedFilterFields['range500To1000'] ||
    newSelectedFilterFields['range1000To2000'] ||
    newSelectedFilterFields['rangeAbove2000']
  ) {
    const beforeRangeMarketScreenerData = [...newMarketScreenerData];
    let range1 = [];
    let range2 = [];
    let range3 = [];
    let range4 = [];
    let range5 = [];
    if (newSelectedFilterFields['range0To100']) {
      range1 = beforeRangeMarketScreenerData.filter((item) => {
        return item['current_price'] < 100;
      });
    }
    if (newSelectedFilterFields['range100To500']) {
      range2 = beforeRangeMarketScreenerData.filter((item) => {
        return item['current_price'] >= 100 && item['current_price'] < 500;
      });
    }
    if (newSelectedFilterFields['range500To1000']) {
      range3 = beforeRangeMarketScreenerData.filter((item) => {
        return item['current_price'] >= 500 && item['current_price'] < 1000;
      });
    }
    if (newSelectedFilterFields['range1000To2000']) {
      range4 = beforeRangeMarketScreenerData.filter((item) => {
        return item['current_price'] >= 1000 && item['current_price'] <= 2000;
      });
    }
    if (newSelectedFilterFields['rangeAbove2000']) {
      range5 = beforeRangeMarketScreenerData.filter((item) => {
        return item['current_price'] > 2000;
      });
    }
    newMarketScreenerData = [...range1, ...range2, ...range3, ...range4, ...range5];
  }

  if (
    newSelectedFilterFields['range0To100'] &&
    newSelectedFilterFields['range100To500'] &&
    newSelectedFilterFields['range500To1000'] &&
    newSelectedFilterFields['range1000To2000'] &&
    newSelectedFilterFields['rangeAbove2000']
  ) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return (
        item['current_price'] < 100 ||
        (item['current_price'] >= 100 && item['current_price'] < 500) ||
        (item['current_price'] >= 500 && item['current_price'] < 1000) ||
        (item['current_price'] >= 1000 && item['current_price'] <= 2000) ||
        item['current_price'] > 2000
      );
    });
  }

  // ------------------------------------------Volume Shocker---------------------------------------//
  if (newSelectedFilterFields['todayHighVolumeDay']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['volume'] >= item['average_volume50'] * 2;
    });
  }
  // --------------------------------------Candlestick------------------------------------//

  if (
    newSelectedFilterFields['todayBullishHigh'] ||
    newSelectedFilterFields['todayBearishLow'] ||
    newSelectedFilterFields['todayNetural']
  ) {
    if (
      newSelectedFilterFields['todayBullishHigh'] &&
      !newSelectedFilterFields['todayBearishLow'] &&
      !newSelectedFilterFields['todayNetural']
    ) {
      newMarketScreenerData = newMarketScreenerData
        .filter((item) => {
          return item['today_high'] - item['today_low'] != 0;
        })
        .filter((item) => {
          return (item['today_close'] - item['today_low']) / (item['today_high'] - item['today_low']) >= Number(0.75);
        });
    } else if (
      newSelectedFilterFields['todayBearishLow'] &&
      !newSelectedFilterFields['todayBullishHigh'] &&
      !newSelectedFilterFields['todayNetural']
    ) {
      newMarketScreenerData = newMarketScreenerData
        .filter((item) => {
          return item['today_high'] - item['today_low'] != 0;
        })
        .filter((item) => {
          return (item['today_close'] - item['today_low']) / (item['today_high'] - item['today_low']) <= Number(0.25);
        });
    } else if (
      newSelectedFilterFields['todayNetural'] &&
      !newSelectedFilterFields['todayBullishHigh'] &&
      !newSelectedFilterFields['todayBearishLow']
    ) {
      newMarketScreenerData = newMarketScreenerData
        .filter((item) => {
          return item['today_high'] - item['today_low'] != 0;
        })
        .filter((item) => {
          return (
            (item['today_close'] - item['today_low']) / (item['today_high'] - item['today_low']) < Number(0.75) &&
            (item['today_close'] - item['today_low']) / (item['today_high'] - item['today_low']) > Number(0.25)
          );
        });
    }
  }
  if (
    newSelectedFilterFields['todayBullishHigh'] &&
    newSelectedFilterFields['todayBearishLow'] &&
    newSelectedFilterFields['todayNetural']
  ) {
    newMarketScreenerData = newMarketScreenerData
      .filter((item) => {
        return item['today_high'] - item['today_low'] != 0;
      })
      .filter((item) => {
        return (
          (item['today_close'] - item['today_low']) / (item['today_high'] - item['today_low']) >= Number(0.75) ||
          (item['today_close'] - item['today_low']) / (item['today_high'] - item['today_low']) <= Number(0.25) ||
          ((item['today_close'] - item['today_low']) / (item['today_high'] - item['today_low']) < Number(0.75) &&
            (item['today_close'] - item['today_low']) / (item['today_high'] - item['today_low']) > Number(0.25))
        );
      });
  }

  if (
    newSelectedFilterFields['yesterdayBullishHigh'] ||
    newSelectedFilterFields['yesterdayBearishLow'] ||
    newSelectedFilterFields['yesterdayNetural']
  ) {
    if (
      newSelectedFilterFields['yesterdayBullishHigh'] &&
      !newSelectedFilterFields['yesterdayBearishLow'] &&
      !newSelectedFilterFields['yesterdayNetural']
    ) {
      newMarketScreenerData = newMarketScreenerData
        .filter((item) => {
          return item['prev_high'] - item['prev_low'] != 0;
        })
        .filter((item) => {
          return (item['prev_close'] - item['prev_low']) / (item['prev_high'] - item['prev_low']) >= Number(0.75);
        });
    } else if (
      newSelectedFilterFields['yesterdayBearishLow'] &&
      !newSelectedFilterFields['yesterdayBullishHigh'] &&
      !newSelectedFilterFields['yesterdayNetural']
    ) {
      newMarketScreenerData = newMarketScreenerData
        .filter((item) => {
          return item['prev_high'] - item['prev_low'] != 0;
        })
        .filter((item) => {
          return (item['prev_close'] - item['prev_low']) / (item['prev_high'] - item['prev_low']) <= Number(0.25);
        });
    } else if (
      newSelectedFilterFields['yesterdayNetural'] &&
      !newSelectedFilterFields['yesterdayBullishHigh'] &&
      !newSelectedFilterFields['yesterdayBearishLow']
    ) {
      newMarketScreenerData = newMarketScreenerData
        .filter((item) => {
          return item['prev_high'] - item['prev_low'] != 0;
        })
        .filter((item) => {
          return (
            (item['prev_close'] - item['prev_low']) / (item['prev_high'] - item['prev_low']) < Number(0.75) &&
            (item['prev_close'] - item['prev_low']) / (item['prev_high'] - item['prev_low']) > Number(0.25)
          );
        });
    }
  }
  if (
    newSelectedFilterFields['yesterdayBullishHigh'] &&
    newSelectedFilterFields['yesterdayBearishLow'] &&
    newSelectedFilterFields['yesterdayNetural']
  ) {
    newMarketScreenerData = newMarketScreenerData
      .filter((item) => {
        return item['prev_high'] - item['prev_low'] != 0;
      })
      .filter((item) => {
        return (
          (item['prev_close'] - item['prev_low']) / (item['prev_high'] - item['prev_low']) >= Number(0.75) ||
          (item['prev_close'] - item['prev_low']) / (item['prev_high'] - item['prev_low']) <= Number(0.25) ||
          ((item['prev_close'] - item['prev_low']) / (item['prev_high'] - item['prev_low']) < Number(0.75) &&
            (item['prev_close'] - item['prev_low']) / (item['prev_high'] - item['prev_low']) > Number(0.25))
        );
      });
  }

  if (newSelectedFilterFields['vwapAbove'] || newSelectedFilterFields['vwapBelow']) {
    if (newSelectedFilterFields['vwapAbove'] && !newSelectedFilterFields['vwapBelow']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['current_price'] >= item['average_price'];
      });
    } else if (newSelectedFilterFields['vwapBelow'] && !newSelectedFilterFields['vwapAbove']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['current_price'] < item['average_price'];
      });
    }
  }
  if (newSelectedFilterFields['vwapAbove'] && newSelectedFilterFields['vwapBelow']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['current_price'] >= item['average_price'] || item['current_price'] < item['average_price'];
    });
  }

  // ------------------------------LTP Max Pain----------------------------------------//
  if (newSelectedFilterFields['maxPainAbove'] || newSelectedFilterFields['maxPainBelow']) {
    if (newSelectedFilterFields['maxPainAbove'] && !newSelectedFilterFields['maxPainBelow']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_close'] > item['max_pain'] && item['max_pain'] != null;
      });
    } else if (newSelectedFilterFields['maxPainBelow'] && !newSelectedFilterFields['maxPainAbove']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_close'] < item['max_pain'] && item['max_pain'] != null;
      });
    }
  }
  if (newSelectedFilterFields['maxPainAbove'] && newSelectedFilterFields['maxPainBelow']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return (
        (item['today_close'] > item['max_pain'] && item['max_pain'] != null) ||
        (item['today_close'] < item['max_pain'] && item['max_pain'] != null)
      );
    });
  }

  // ------------------------------Moving Average-------------------------------------//
  if (newSelectedFilterFields['todayAbove20SMA'] || newSelectedFilterFields['todayBelow20SMA']) {
    if (newSelectedFilterFields['todayAbove20SMA'] && !newSelectedFilterFields['todayBelow20SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_close'] >= item['average_close20'];
      });
    } else if (newSelectedFilterFields['todayBelow20SMA'] && !newSelectedFilterFields['todayAbove20SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_close'] < item['average_close20'];
      });
    }
  }
  if (newSelectedFilterFields['todayAbove20SMA'] && newSelectedFilterFields['todayBelow20SMA']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['today_close'] >= item['average_close20'] || item['today_close'] < item['average_close20'];
    });
  }

  if (newSelectedFilterFields['todayAbove50SMA'] || newSelectedFilterFields['todayBelow50SMA']) {
    if (newSelectedFilterFields['todayAbove50SMA'] && !newSelectedFilterFields['todayBelow50SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_close'] >= item['average_close50'];
      });
    } else if (newSelectedFilterFields['todayBelow50SMA'] && !newSelectedFilterFields['todayAbove50SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_close'] < item['average_close50'];
      });
    }
  }
  if (newSelectedFilterFields['todayAbove50SMA'] && newSelectedFilterFields['todayBelow50SMA']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['today_close'] >= item['average_close50'] || item['today_close'] < item['average_close50'];
    });
  }

  if (newSelectedFilterFields['todayAbove200SMA'] || newSelectedFilterFields['todayBelow200SMA']) {
    if (newSelectedFilterFields['todayAbove200SMA'] && !newSelectedFilterFields['todayBelow200SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_close'] >= item['average_close200'];
      });
    } else if (newSelectedFilterFields['todayBelow200SMA'] && !newSelectedFilterFields['todayAbove200SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['today_close'] < item['average_close200'];
      });
    }
  }
  if (newSelectedFilterFields['todayAbove200SMA'] && newSelectedFilterFields['todayBelow200SMA']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['today_close'] >= item['average_close200'] || item['today_close'] < item['average_close200'];
    });
  }

  if (newSelectedFilterFields['yesterdayAbove20SMA'] || newSelectedFilterFields['yesterdayBelow20SMA']) {
    if (newSelectedFilterFields['yesterdayAbove20SMA'] && !newSelectedFilterFields['yesterdayBelow20SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['prev_close'] >= item['day_before_average_close20'];
      });
    } else if (newSelectedFilterFields['yesterdayBelow20SMA'] && !newSelectedFilterFields['yesterdayAbove20SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['prev_close'] < item['day_before_average_close20'];
      });
    }
  }
  if (newSelectedFilterFields['yesterdayAbove20SMA'] && newSelectedFilterFields['yesterdayBelow20SMA']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return (
        item['prev_close'] >= item['day_before_average_close20'] ||
        item['prev_close'] < item['day_before_average_close20']
      );
    });
  }

  if (newSelectedFilterFields['yesterdayAbove50SMA'] || newSelectedFilterFields['yesterdayBelow50SMA']) {
    if (newSelectedFilterFields['yesterdayAbove50SMA'] && !newSelectedFilterFields['yesterdayBelow50SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['prev_close'] >= item['day_before_average_close50'];
      });
    } else if (newSelectedFilterFields['yesterdayBelow50SMA'] && !newSelectedFilterFields['yesterdayAbove50SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['prev_close'] < item['day_before_average_close50'];
      });
    }
  }
  if (newSelectedFilterFields['yesterdayAbove50SMA'] && newSelectedFilterFields['yesterdayBelow50SMA']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return (
        item['prev_close'] >= item['day_before_average_close50'] ||
        item['prev_close'] < item['day_before_average_close50']
      );
    });
  }

  if (newSelectedFilterFields['yesterdayAbove200SMA'] || newSelectedFilterFields['yesterdayBelow200SMA']) {
    if (newSelectedFilterFields['yesterdayAbove200SMA'] && !newSelectedFilterFields['yesterdayBelow200SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['prev_close'] >= item['day_before_average_close200'];
      });
    } else if (newSelectedFilterFields['yesterdayBelow200SMA'] && !newSelectedFilterFields['yesterdayAbove200SMA']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['prev_close'] < item['day_before_average_close200'];
      });
    }
  }
  if (newSelectedFilterFields['yesterdayAbove200SMA'] && newSelectedFilterFields['yesterdayBelow200SMA']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return (
        item['prev_close'] >= item['day_before_average_close200'] ||
        item['prev_close'] < item['day_before_average_close200']
      );
    });
  }

  // -------------------Financial Filter--------------------------------------------//

  // -------------------------------Market Cap------------------------------//
  if (
    newSelectedFilterFields['marketCapBelow1000'] ||
    newSelectedFilterFields['marketCap1000To5000'] ||
    newSelectedFilterFields['marketCap5000To20000'] ||
    newSelectedFilterFields['marketCap20000To50000'] ||
    newSelectedFilterFields['marketCapAbove50000']
  ) {
    let marketCapData1 = [];
    let marketCapData2 = [];
    let marketCapData3 = [];
    let marketCapData4 = [];
    let marketCapData5 = [];
    if (newSelectedFilterFields['marketCapBelow1000']) {
      marketCapData1 = newMarketScreenerData.filter((item) => {
        return item['market_cap'] < 1000;
      });
    }

    if (newSelectedFilterFields['marketCap1000To5000']) {
      marketCapData2 = newMarketScreenerData.filter((item) => {
        return item['market_cap'] >= 1000 && item['market_cap'] < 5000;
      });
    }

    if (newSelectedFilterFields['marketCap5000To20000']) {
      marketCapData3 = newMarketScreenerData.filter((item) => {
        return item['market_cap'] >= 5000 && item['market_cap'] < 20000;
      });
    }

    if (newSelectedFilterFields['marketCap20000To50000']) {
      marketCapData4 = newMarketScreenerData.filter((item) => {
        return item['market_cap'] >= 20000 && item['market_cap'] <= 50000;
      });
    }

    if (newSelectedFilterFields['marketCapAbove50000']) {
      marketCapData5 = newMarketScreenerData.filter((item) => {
        return item['market_cap'] > 50000;
      });
    }

    newMarketScreenerData = [
      ...marketCapData1,
      ...marketCapData2,
      ...marketCapData3,
      ...marketCapData4,
      ...marketCapData5,
    ];
  }

  // -------------------------------Stock PE------------------------------//
  if (
    newSelectedFilterFields['stockPEBelow5'] ||
    newSelectedFilterFields['stockPE10To20'] ||
    newSelectedFilterFields['stockPE50To100'] ||
    newSelectedFilterFields['stockPE5To10'] ||
    newSelectedFilterFields['stockPE20To50'] ||
    newSelectedFilterFields['stockPEAbove100']
  ) {
    let stockPEData1 = [];
    let stockPEData2 = [];
    let stockPEData3 = [];
    let stockPEData4 = [];
    let stockPEData5 = [];
    let stockPEData6 = [];
    if (newSelectedFilterFields['stockPEBelow5']) {
      stockPEData1 = newMarketScreenerData.filter((item) => {
        return item['stock_pe'] < 5;
      });
    }

    if (newSelectedFilterFields['stockPE10To20']) {
      stockPEData2 = newMarketScreenerData.filter((item) => {
        return item['stock_pe'] >= 10 && item['stock_pe'] < 20;
      });
    }

    if (newSelectedFilterFields['stockPE50To100']) {
      stockPEData3 = newMarketScreenerData.filter((item) => {
        return item['stock_pe'] >= 50 && item['stock_pe'] <= 100;
      });
    }

    if (newSelectedFilterFields['stockPE5To10']) {
      stockPEData4 = newMarketScreenerData.filter((item) => {
        return item['stock_pe'] >= 5 && item['stock_pe'] < 10;
      });
    }
    if (newSelectedFilterFields['stockPE20To50']) {
      stockPEData5 = newMarketScreenerData.filter((item) => {
        return item['stock_pe'] >= 20 && item['stock_pe'] < 50;
      });
    }
    if (newSelectedFilterFields['stockPEAbove100']) {
      stockPEData6 = newMarketScreenerData.filter((item) => {
        return item['stock_pe'] > 100;
      });
    }

    newMarketScreenerData = [
      ...stockPEData1,
      ...stockPEData2,
      ...stockPEData3,
      ...stockPEData4,
      ...stockPEData5,
      ...stockPEData6,
    ];
  }
  // -------------------------------Dividend Yield------------------------------//
  if (
    newSelectedFilterFields['dividendYield0To1'] ||
    newSelectedFilterFields['dividendYield2To5'] ||
    newSelectedFilterFields['dividendYield1To2'] ||
    newSelectedFilterFields['dividendYieldAbove5']
  ) {
    let dividendYieldData1 = [];
    let dividendYieldData2 = [];
    let dividendYieldData3 = [];
    let dividendYieldData4 = [];
    if (newSelectedFilterFields['dividendYield0To1']) {
      dividendYieldData1 = newMarketScreenerData.filter((item) => {
        return item['dividend_yield'] >= 0 && item['dividend_yield'] < 1;
      });
    }

    if (newSelectedFilterFields['dividendYield2To5']) {
      dividendYieldData2 = newMarketScreenerData.filter((item) => {
        return item['dividend_yield'] >= 2 && item['dividend_yield'] <= 5;
      });
    }

    if (newSelectedFilterFields['dividendYield1To2']) {
      dividendYieldData3 = newMarketScreenerData.filter((item) => {
        return item['dividend_yield'] >= 1 && item['dividend_yield'] < 2;
      });
    }

    if (newSelectedFilterFields['dividendYieldAbove5']) {
      dividendYieldData4 = newMarketScreenerData.filter((item) => {
        return item['dividend_yield'] > 5;
      });
    }

    newMarketScreenerData = [
      ...dividendYieldData1,
      ...dividendYieldData2,
      ...dividendYieldData3,
      ...dividendYieldData4,
    ];
  }
  // -------------------------------ROCE------------------------------//
  if (
    newSelectedFilterFields['roceBelow5'] ||
    newSelectedFilterFields['roce10To20'] ||
    newSelectedFilterFields['roce50To70'] ||
    newSelectedFilterFields['roce5To10'] ||
    newSelectedFilterFields['roce20To50'] ||
    newSelectedFilterFields['roce70To100']
  ) {
    let roceData1 = [];
    let roceData2 = [];
    let roceData3 = [];
    let roceData4 = [];
    let roceData5 = [];
    let roceData6 = [];
    if (newSelectedFilterFields['roceBelow5']) {
      roceData1 = newMarketScreenerData.filter((item) => {
        return item['roce'] < 5;
      });
    }

    if (newSelectedFilterFields['roce10To20']) {
      roceData2 = newMarketScreenerData.filter((item) => {
        return item['roce'] >= 10 && item['roce'] < 20;
      });
    }

    if (newSelectedFilterFields['roce50To70']) {
      roceData3 = newMarketScreenerData.filter((item) => {
        return item['roce'] >= 50 && item['roce'] < 70;
      });
    }

    if (newSelectedFilterFields['roce5To10']) {
      roceData4 = newMarketScreenerData.filter((item) => {
        return item['roce'] >= 5 && item['roce'] < 10;
      });
    }
    if (newSelectedFilterFields['roce20To50']) {
      roceData5 = newMarketScreenerData.filter((item) => {
        return item['roce'] >= 20 && item['roce'] < 50;
      });
    }

    if (newSelectedFilterFields['roce70To100']) {
      roceData6 = newMarketScreenerData.filter((item) => {
        return item['roce'] >= 70 && item['roce'] <= 100;
      });
    }

    newMarketScreenerData = [...roceData1, ...roceData2, ...roceData3, ...roceData4, ...roceData5, ...roceData6];
  }
  // //-------------------------------ROE------------------------------//
  if (
    newSelectedFilterFields['roeBelow0'] ||
    newSelectedFilterFields['roe0To10'] ||
    newSelectedFilterFields['roe10To20'] ||
    newSelectedFilterFields['roe20To50'] ||
    newSelectedFilterFields['roeAbove50']
  ) {
    let roeData1 = [];
    let roeData2 = [];
    let roeData3 = [];
    let roeData4 = [];
    let roeData5 = [];
    if (newSelectedFilterFields['roeBelow0']) {
      roeData1 = newMarketScreenerData.filter((item) => {
        return item['roe'] < 0;
      });
    }

    if (newSelectedFilterFields['roe0To10']) {
      roeData4 = newMarketScreenerData.filter((item) => {
        return item['roe'] >= 0 && item['roe'] < 10;
      });
    }

    if (newSelectedFilterFields['roe10To20']) {
      roeData2 = newMarketScreenerData.filter((item) => {
        return item['roe'] >= 10 && item['roe'] < 20;
      });
    }

    if (newSelectedFilterFields['roe20To50']) {
      roeData5 = newMarketScreenerData.filter((item) => {
        return item['roe'] >= 20 && item['roe'] <= 50;
      });
    }

    if (newSelectedFilterFields['roeAbove50']) {
      roeData3 = newMarketScreenerData.filter((item) => {
        return item['roe'] > 50;
      });
    }

    newMarketScreenerData = [...roeData1, ...roeData2, ...roeData3, ...roeData4, ...roeData5];
  }
  // -------------------------------Sales Growth------------------------------//
  if (
    newSelectedFilterFields['salesGrowthBelow0'] ||
    newSelectedFilterFields['salesGrowth0To5'] ||
    newSelectedFilterFields['salesGrowth5To10'] ||
    newSelectedFilterFields['salesGrowth10To15'] ||
    newSelectedFilterFields['salesGrowth15To20'] ||
    newSelectedFilterFields['salesGrowthAbove20']
  ) {
    let salesGrowthData1 = [];
    let salesGrowthData2 = [];
    let salesGrowthData3 = [];
    let salesGrowthData4 = [];
    let salesGrowthData5 = [];
    let salesGrowthData6 = [];
    if (newSelectedFilterFields['salesGrowthBelow0']) {
      salesGrowthData1 = newMarketScreenerData.filter((item) => {
        return item['sales_growth'] < 0;
      });
    }

    if (newSelectedFilterFields['salesGrowth0To5']) {
      salesGrowthData4 = newMarketScreenerData.filter((item) => {
        return item['sales_growth'] >= 0 && item['sales_growth'] < 5;
      });
    }

    if (newSelectedFilterFields['salesGrowth5To10']) {
      salesGrowthData2 = newMarketScreenerData.filter((item) => {
        return item['sales_growth'] >= 5 && item['sales_growth'] < 10;
      });
    }

    if (newSelectedFilterFields['salesGrowth10To15']) {
      salesGrowthData5 = newMarketScreenerData.filter((item) => {
        return item['sales_growth'] >= 10 && item['sales_growth'] < 15;
      });
    }

    if (newSelectedFilterFields['salesGrowth15To20']) {
      salesGrowthData3 = newMarketScreenerData.filter((item) => {
        return item['sales_growth'] >= 15 && item['sales_growth'] < 20;
      });
    }

    if (newSelectedFilterFields['salesGrowthAbove20']) {
      salesGrowthData6 = newMarketScreenerData.filter((item) => {
        return item['sales_growth'] > 20;
      });
    }

    newMarketScreenerData = [
      ...salesGrowthData1,
      ...salesGrowthData2,
      ...salesGrowthData3,
      ...salesGrowthData4,
      ...salesGrowthData5,
      ...salesGrowthData6,
    ];
  }
  // -------------------------------Piotroski Score------------------------------//
  if (
    newSelectedFilterFields['piotroskiScore0To2'] ||
    newSelectedFilterFields['piotroskiScore3To7'] ||
    newSelectedFilterFields['piotroskiScore8To9']
  ) {
    let piotroskiScoreData1 = [];
    let piotroskiScoreData2 = [];
    let piotroskiScoreData3 = [];
    if (newSelectedFilterFields['piotroskiScore0To2']) {
      piotroskiScoreData1 = newMarketScreenerData.filter((item) => {
        return item['piotroski_Score'] <= 2;
      });
    }
    if (newSelectedFilterFields['piotroskiScore3To7']) {
      piotroskiScoreData2 = newMarketScreenerData.filter((item) => {
        return item['piotroski_Score'] >= 3 && item['piotroski_Score'] <= 7;
      });
    }
    if (newSelectedFilterFields['piotroskiScore8To9']) {
      piotroskiScoreData3 = newMarketScreenerData.filter((item) => {
        return item['piotroski_Score'] >= 8 && item['piotroski_Score'] <= 9;
      });
    }

    newMarketScreenerData = [...piotroskiScoreData1, ...piotroskiScoreData2, ...piotroskiScoreData3];
  }

  // Category
  if (newSelectedFilterFields['fnoStocks'] == true || newSelectedFilterFields['nifty50Stocks'] == true) {
    if (newSelectedFilterFields['fnoStocks'] == true && !newSelectedFilterFields['nifty50Stocks'] == true) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['category'] != null;
      });
    } else if (newSelectedFilterFields['nifty50Stocks'] == true && !newSelectedFilterFields['fnoStocks'] == true) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['nifty50'] != null;
      });
    }
  }
  if (newSelectedFilterFields['fnoStocks'] == true && newSelectedFilterFields['nifty50Stocks'] == true) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return item['category'] != null || item['nifty50'] != null;
    });
  }

  if (newSelectedFilterFields['financial'] || newSelectedFilterFields['nonFinancial']) {
    if (newSelectedFilterFields['financial'] && !newSelectedFilterFields['nonFinancial']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['finIndustry'] == 'Yes';
      });
    } else if (newSelectedFilterFields['nonFinancial'] && !newSelectedFilterFields['financial']) {
      newMarketScreenerData = newMarketScreenerData.filter((item) => {
        return item['finIndustry'] == 'No' || item['finIndustry'] == null || item['finIndustry'] == '';
      });
    }
  }
  if (newSelectedFilterFields['financial'] && newSelectedFilterFields['nonFinancial']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return (
        item['finIndustry'] == 'Yes' ||
        item['finIndustry'] == 'No' ||
        item['finIndustry'] == null ||
        item['finIndustry'] == ''
      );
    });
  }

  // Watchlist
  if (newSelectedFilterFields['watchlistId']) {
    newMarketScreenerData = newMarketScreenerData.filter((item) => {
      return newSelectedFilterFields['watchlist']?.['symbol_list'].indexOf(item['stock']) != -1;
    });
  }

   // Pre-Defined group of stocks
 if (newSelectedFilterFields['screenergroupId']) {
  newMarketScreenerData = newMarketScreenerData.filter((item) => {
    return newSelectedFilterFields['screenerGroup']['symbol_name']?.split(',').includes(item['symbol']) == true ||  newSelectedFilterFields['screenerGroup']['symbol_name'].split(',').includes(' '+item['symbol']) == true ;
  });
}
  return newMarketScreenerData;
}
