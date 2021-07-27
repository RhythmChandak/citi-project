package com.citi.trade.recommendation.controller;

import com.citi.trade.recommendation.model.SectorAvg;
import com.citi.trade.recommendation.model.SectorStocks;
import com.citi.trade.recommendation.service.SectorStocksService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/sectorStocks")
@RestController
@CrossOrigin(origins = "https://www.citiproj.ml")
public class SectorStocksController {
	private static final Logger logger = LogManager.getLogger(SectorStocksController.class);

	@Autowired
	SectorStocksService sectorstocksService;

	@GetMapping(value = "/showCompanies/{sector}")
	public List<SectorStocks> showStocks(@PathVariable String sector) {
		// Returns Companies when sector is passed as an argument.

		logger.info("Fetching Companies belonging to Sector: {}" ,sector);
		return sectorstocksService.getCompanyBySector(sector);
	}

	@GetMapping(value = "/showCompanySymbol/{sector}")
	public List<String> showCompanySymbols(@PathVariable String sector) {
		// Returns Company Symbols when sector is passed as an argument.

		logger.info("Fetching Company Symbols of Companies belonging to Sector: {}" ,sector);
		return sectorstocksService.getCompanySymbolBySector(sector);
	}

	@GetMapping(value = "/showSectorWiseChange")
	public List<SectorAvg> showSectorWiseChange() {
		// Returns Sector Wise Comparison on attribute - change.

		logger.info("Finding Sector Wise Avg Growth");
		return sectorstocksService.getSectorWiseGrowth();
	}

	@GetMapping(value = "/showDistinctSectors")
	public List<String> showDistinctSectors() {
		// Returns Distinct sectors.

		logger.info("Finding Distinct Sectors");
		return sectorstocksService.getDistinctSectors();
	}

}



