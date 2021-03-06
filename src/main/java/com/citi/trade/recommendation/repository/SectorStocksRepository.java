package com.citi.trade.recommendation.repository;

import com.citi.trade.recommendation.model.SectorStocks;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class SectorStocksRepository {

	private static final Logger logger = LogManager.getLogger(SectorStocksRepository.class);

	@Autowired
	JdbcTemplate template;

	public boolean addSectorStocks(SectorStocks sectorStocks) {
		// Saves Sector wise Stocks
		try {
			logger.info("Inserting into database Sector: {}, Company: {} ", sectorStocks.getSector(),
					sectorStocks.getCompanySymbol());

			int added = template.update("insert into sector_stocks(company_symbol,company_name,sector) values(?,?,?)",
					sectorStocks.getCompanySymbol(), sectorStocks.getCompanyName(), sectorStocks.getSector());

			if (added == 1) {
				logger.info("Insertion Successful for Sector: {} and Company: {}", sectorStocks.getSector(),
						sectorStocks.getCompanySymbol());
				return true;
			}
		} catch (Exception e) {
			logger.error("Insertion could not be done!");

		}
		return false;
	}

	public List<SectorStocks> findCompanyBySector(String sector) {
		// Returns Companies of sector passed as an argument from the database.
		logger.info("Fetching Companies under Sector {} ", sector);
		List<SectorStocks> sectorCompanies = null;
		try {
			String query = "select * from sector_stocks where sector=?";
			sectorCompanies = template.query(query,
					(set, arg1) -> new SectorStocks(set.getString(1), set.getString(2), set.getString(3)), sector);
			if (sectorCompanies.isEmpty()) {
				logger.info("Company symbols not found");
			}
		} catch (Exception e) {
			logger.error("Error occured in fetching Company Symbols - {}", e.getMessage());

		}
		return sectorCompanies;
	}

	public List<String> findCompanySymbolBySector(String sector) {
		// Returns Company Symbols of sector passed as an argument from the database.
		logger.info("Fetching Company Symbols of Companies under Sector {}", sector);
		List<String> sectorCompanies = null;
		try {
			String query = "select company_symbol from sector_stocks where sector=?";
			sectorCompanies = template.query(query, (set, arg1) -> set.getString(1) // return company symbol
					, sector);
			if (sectorCompanies.isEmpty()) {
				logger.info("Company symbols not found");
			}
		} catch (Exception e) {
			logger.error("Error occured in fetching Company Symbols - {}", e.getMessage());
		}
		return sectorCompanies;
	}

	public List<String> findDistinctSectors() {
		// Returns distinct sectors from the database.
		logger.info("Fetching Distict Sectors");
		List<String> sectorCompanies = new ArrayList<>();
		try {
			String query = "select distinct(sector) from sector_stocks";
			sectorCompanies = template.query(query, (set, arg1) -> set.getString(1) // sector
			);
			if (sectorCompanies.isEmpty())
				logger.info("No company symbols were found");

		} catch (Exception e) {
			logger.error("Error occured in fetching Distict Sectors - {}", e.getMessage());

		}
		return sectorCompanies;

	}

	public int deleteStocksBySector(String sector) {
		// Deletes selected stocks.
		try {
			logger.info("Deleting Stocks of Sector: {} ", sector);
			String deleteQuery = "delete from sector_stocks where sector=?";
			return template.update(deleteQuery, sector);
		} catch (Exception e) {
			logger.error("Sector: {} could not be deleted", sector);
			return 0;
		}
	}
}
