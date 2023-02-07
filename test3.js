// Pad for Christopher Wiles - Senior Software Engineer

// Scheduling work on a jobsite is one of the most difficult tasks in
// construction management. Different contractors work on different
// trades and can only do so much work in a single day. We need to
// make sure that we have the right people on the job site every day
// and anticipate how many days it will take to complete a set of tasks.

// *Requirements:*

// * Your solution should prefer to finish the work as fast as possible
// * When possible, your solution should prefer the worker with the lower value for the cost attribute

class WorkScheduler {
  workers;

  constructor(workers) {
    this.workers = workers;
  }

  // Given a suitable trade, returns a list of emails of workers who work the
  // specified trade.
  //
  // `trade`: Specific trade desired
  // Returns list of worker emails, sorted alphabetically
  suitableWorkers(trade) {
    return this.workers
      .filter((worker) => worker.trades.includes(trade))
      .map((worker) => worker.email)
      .sort((a, b) => a.localeCompare(b));
  }

  // Given a list of trades, return a list of worker emails that can work that
  // day.  A worker cannot work multiple trades in one day, and if there are
  // multiple workers available to work on a particular trade, the worker with
  // the cheapest cost should be chosen.
  //
  // `trades`: A list of trades.  Each trade represents 1 unit of work that needs
  // to be completed
  // Returns a list of worker emails that are scheduled for the day, in the order
  // that they were scheduled (i.e. in the same order that the trades were
  // provided).
  scheduleOneDay(trades) {
    // expect(scheduler.scheduleOneDay(["drywall", "brickwork"])).to.eql([
    //   "wally@walls.com",
    //   "bob@brickwork.com",
    // ]);
    const workers = {
      // [tradeName]: [];
    };

    this.workers.forEach((worker) => {
      if (worker.trades.some((trade) => trades.includes(trade))) {
        workers[worker.email] = worker;
      }
    });

    const emails = trades
      .map((trade) => {
        let cheapeast = {};

        Object.values(workers).forEach((worker) => {
          if (cheapeast.cost) {
            if (worker.cost < cheapeast.cost) {
              cheapeast = worker;
            }
          } else {
            cheapeast = worker;
          }
        });
        delete workers[cheapeast.email];
        return cheapeast.email;
      })
      .filter(Boolean);

    console.log(trades);

    return emails;
  }

  // Given a list of trades, schedules work for each day, until all the trades
  // are scheduled. A worker cannot work multiple trades in one day, and if
  // there are multiple workers available to work on a particular trade, the
  // worker with the cheapest cost should be chosen.
  //
  // `trades`: A list of trades.  Each trade represents 1 unit of work that
  // needs to be completed
  // Returns a list of scheduled days.  Each day is a list of worker emails for
  // work scheduled for that day.
  scheduleAllTasks(trades) {
    let tradesLeft = trades;
    const schedule = [];

    // cheapest, emails
    while (tradesLeft.length) {
      const day = this.scheduleOneDay(tradesLeft);
      schedule.push(day);
      tradesLeft = tradesLeft.slice(day.length);
    }

    // console.log({trades, schedule});

    return schedule;
  }
}

const Mocha = require('mocha');
const chai = require('chai');
const mocha = new Mocha();
const expect = chai.expect;

mocha.suite.emit('pre-require', this, 'solution', mocha);

const workers = [
  {
    email: 'bob@brickwork.com',
    trades: ['brickwork'],
    cost: 90,
  },
  {
    email: 'alice@example.com',
    trades: ['brickwork', 'drywall'],
    cost: 100,
  },
  {
    email: 'charlie@cement.com',
    trades: ['cement'],
    cost: 80,
  },
  {
    email: 'wally@walls.com',
    trades: ['cement', 'drywall'],
    cost: 95,
  },
];

describe('simple schedules', function () {
  let scheduler;

  beforeEach(function () {
    scheduler = new WorkScheduler(workers);
  });

  it('can find a suitable worker for a task', function () {
    expect(scheduler.suitableWorkers('cement')).to.eql(['charlie@cement.com', 'wally@walls.com']);
    expect(scheduler.suitableWorkers('brickwork')).to.eql([
      'alice@example.com',
      'bob@brickwork.com',
    ]);
    expect(scheduler.suitableWorkers('drywall')).to.eql(['alice@example.com', 'wally@walls.com']);
  });

  it('can build a simple schedule for one day, using the cheapest labor', function () {
    expect(scheduler.scheduleOneDay(['cement'])).to.eql(['charlie@cement.com']);
    expect(scheduler.scheduleOneDay(['brickwork'])).to.eql(['bob@brickwork.com']);
    expect(scheduler.scheduleOneDay(['drywall'])).to.eql(['wally@walls.com']);
    expect(scheduler.scheduleOneDay(['cement', 'drywall'])).to.eql([
      'charlie@cement.com',
      'wally@walls.com',
    ]);
    expect(scheduler.scheduleOneDay(['cement', 'brickwork'])).to.eql([
      'charlie@cement.com',
      'bob@brickwork.com',
    ]);
    expect(scheduler.scheduleOneDay(['drywall', 'brickwork'])).to.eql([
      'wally@walls.com',
      'bob@brickwork.com',
    ]);
    expect(scheduler.scheduleOneDay(['cement', 'brickwork', 'drywall'])).to.eql([
      'charlie@cement.com',
      'bob@brickwork.com',
      'wally@walls.com',
    ]);
  });

  it('does not double book workers', function () {
    expect(scheduler.scheduleOneDay(['cement', 'cement', 'cement'])).to.eql([
      'charlie@cement.com',
      'wally@walls.com',
    ]);
    expect(scheduler.scheduleOneDay(['brickwork', 'brickwork', 'brickwork'])).to.eql([
      'bob@brickwork.com',
      'alice@example.com',
    ]);
    expect(scheduler.scheduleOneDay(['drywall', 'drywall', 'drywall'])).to.eql([
      'wally@walls.com',
      'alice@example.com',
    ]);
  });

  it('can schedule multiple units of work for a single trade, in fewest days', function () {
    const schedule1 = scheduler.scheduleAllTasks(['brickwork', 'brickwork', 'brickwork']);
    expect(schedule1[0]).to.include('bob@brickwork.com');
    expect(schedule1[0]).to.include('alice@example.com');
    expect(schedule1[1]).to.include('bob@brickwork.com');

    const schedule2 = scheduler.scheduleAllTasks(['drywall', 'drywall', 'drywall']);
    expect(schedule2[0]).to.include('wally@walls.com');
    expect(schedule2[0]).to.include('alice@example.com');
    expect(schedule2[1]).to.include('wally@walls.com');

    const schedule3 = scheduler.scheduleAllTasks(['cement', 'cement', 'cement']);
    expect(schedule3[0]).to.include('charlie@cement.com');
    expect(schedule3[0]).to.include('wally@walls.com');
    expect(schedule3[1]).to.include('charlie@cement.com');
  });

  it('can schedule multiple units of work for many trades, in fewest days', function () {
    const schedule1 = scheduler.scheduleAllTasks(['cement', 'cement', 'cement', 'brickwork']);
    expect(schedule1[0]).to.include('charlie@cement.com');
    expect(schedule1[0]).to.include('bob@brickwork.com');
    expect(schedule1[0]).to.include('wally@walls.com');
    expect(schedule1[1]).to.include('charlie@cement.com');

    const schedule2 = scheduler.scheduleAllTasks([
      'cement',
      'cement',
      'drywall',
      'drywall',
      'cement',
      'brickwork',
    ]);
    expect(schedule2[0]).to.include('charlie@cement.com');
    expect(schedule2[0]).to.include('bob@brickwork.com');
    expect(schedule2[0]).to.include('alice@example.com');
    expect(schedule2[0]).to.include('wally@walls.com');
    expect(schedule2[1]).to.include('charlie@cement.com');
    expect(schedule2[1]).to.include('wally@walls.com');

    const schedule3 = scheduler.scheduleAllTasks([
      'cement',
      'cement',
      'brickwork',
      'brickwork',
      'cement',
      'brickwork',
    ]);
    expect(schedule3[0]).to.include('charlie@cement.com');
    expect(schedule3[0]).to.include('bob@brickwork.com');
    expect(schedule3[0]).to.include('alice@example.com');
    expect(schedule3[0]).to.include('wally@walls.com');
    expect(schedule3[1]).to.include('charlie@cement.com');
    expect(schedule3[1]).to.include('bob@brickwork.com');
  });
});

mocha.run();
